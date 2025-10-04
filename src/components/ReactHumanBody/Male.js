import React, { Component } from 'react';
import Tooltip from "@mui/material/Tooltip";

// Import all organs and layout
import BodyLayout from './BodyLayout';
import Nasopharynx from './Nasopharynx';
import OralCavity from './OralCavity';
import Kidney from './Kidney';
import Testis from './Testis';
import Eye from './Eye';
import Lung from './Lung';
import Heart from './Heart';
import Brain from './Brain';
import Breast from './Breast';
import Thyroid from './Thyroid';
import AdrenalGland from './AdrenalGland';
import Pancreas from './Pancreas';
import Femur from './Femur';
import CirculatorySystem from './CirculatorySystem';
import Esophagus from './Esophagus';
import Stomach from './Stomach';
import SmallIntestine from './SmallIntestine';
import Appendix from './Appendix';
import Rectum from './Rectum';
import Anus from './Anus';
import Duodenum from './Duodenum';
import Liver from './Liver';
import GalBladder from './GalBladder';
import SalivaryGland from './SalivaryGland';
import Colon from './Colon';
import UrinaryBladder from './UrinaryBladder';
import Prostate from './Prostate';
import SkeletalMuscle from './SkeletalMuscle';
import Adipose from './Adipose';
import Skin from './Skin';

// Organ information and colors
const organData = {
  nasopharynx: { name: "Nasopharynx", function: "Passage for air from nose to throat", location: "Upper throat behind nose", color: "#FFB347" },
  oralCavity: { name: "Oral Cavity", function: "Ingestion, speech, and breathing", location: "Mouth", color: "#FF6961" },
  kidney: { name: "Kidney", function: "Filters blood and produces urine", location: "Abdomen", color: "#77DD77" },
  testis: { name: "Testis", function: "Produces sperm and testosterone", location: "Scrotum", color: "#CBAACB" },
  eye: { name: "Eye", function: "Vision", location: "Head", color: "#779ECB" },
  lung: { name: "Lung", function: "Breathing and oxygen exchange", location: "Chest", color: "#AEC6CF" },
  heart: { name: "Heart", function: "Pumps blood", location: "Chest", color: "#FF6961" },
  brain: { name: "Brain", function: "Controls body functions and cognition", location: "Head", color: "#FFD700" },
  breast: { name: "Breast", function: "Produces milk", location: "Chest", color: "#FFB6C1" },
  thyroid: { name: "Thyroid", function: "Regulates metabolism", location: "Neck", color: "#FFB347" },
  adrenalGland: { name: "Adrenal Gland", function: "Produces hormones like adrenaline", location: "Above kidneys", color: "#CBAACB" },
  pancreas: { name: "Pancreas", function: "Regulates blood sugar", location: "Abdomen", color: "#77DD77" },
  femur: { name: "Femur", function: "Supports weight and allows movement", location: "Thigh", color: "#D1B280" },
  circulatorySystem: { name: "Circulatory System", function: "Transports blood", location: "Whole body", color: "#FF6961" },
  esophagus: { name: "Esophagus", function: "Transports food to stomach", location: "Throat", color: "#FFB347" },
  stomach: { name: "Stomach", function: "Digestive organ", location: "Abdomen", color: "#FFB347" },
  smallIntestine: { name: "Small Intestine", function: "Absorbs nutrients", location: "Abdomen", color: "#77DD77" },
  appendix: { name: "Appendix", function: "Immune function", location: "Abdomen", color: "#77DD77" },
  rectum: { name: "Rectum", function: "Stores feces", location: "Pelvis", color: "#AEC6CF" },
  anus: { name: "Anus", function: "Excretes feces", location: "Pelvis", color: "#AEC6CF" },
  duodenum: { name: "Duodenum", function: "First part of small intestine", location: "Abdomen", color: "#77DD77" },
  liver: { name: "Liver", function: "Detoxifies chemicals and produces bile", location: "Abdomen", color: "#77DD77" },
  galbladder: { name: "Gall Bladder", function: "Stores bile", location: "Abdomen", color: "#77DD77" },
  salivaryGland: { name: "Salivary Gland", function: "Produces saliva", location: "Mouth", color: "#FF6961" },
  colon: { name: "Colon", function: "Absorbs water and electrolytes", location: "Abdomen", color: "#77DD77" },
  urinaryBladder: { name: "Urinary Bladder", function: "Stores urine", location: "Pelvis", color: "#AEC6CF" },
  prostate: { name: "Prostate", function: "Produces seminal fluid", location: "Pelvis", color: "#CBAACB" },
  skeletalMuscle: { name: "Skeletal Muscle", function: "Movement", location: "Whole body", color: "#D1B280" },
  adipose: { name: "Adipose Tissue", function: "Stores fat", location: "Whole body", color: "#F5DEB3" },
  skin: { name: "Skin", function: "Protects body", location: "Whole body", color: "#FFE4C4" },
};

class Male extends Component {
  state = { hoveredOrgan: null };

  handleMouseEnter = (id) => this.setState({ hoveredOrgan: id });
  handleMouseLeave = () => this.setState({ hoveredOrgan: null });

  renderOrgan = (OrganComponent, id) => {
    const organ = organData[id];
    const isHovered = this.state.hoveredOrgan === id;

    return (
      <Tooltip
        key={id}
        title={
          <div>
            <strong>{organ.name}</strong><br />
            Function: {organ.function}<br />
            Location: {organ.location}
          </div>
        }
        placement="right"
      >
        <g
          onMouseEnter={() => this.handleMouseEnter(id)}
          onMouseLeave={this.handleMouseLeave}
          onClick={() => console.log("Clicked:", organ.name)}
          style={{ cursor: 'pointer' }}
        >
          <OrganComponent
            fillColor={isHovered ? "#FFD700" : organ.color}
            fillOpacity={isHovered ? 0.9 : 0.7}
          />
        </g>
      </Tooltip>
    );
  };

  render() {
    return (
      <svg width="460" height="720" viewBox="0 0 460 720">
        <BodyLayout />
        {this.renderOrgan(Nasopharynx, "nasopharynx")}
        {this.renderOrgan(OralCavity, "oralCavity")}
        {this.renderOrgan(Kidney, "kidney")}
        {this.renderOrgan(Testis, "testis")}
        {this.renderOrgan(Eye, "eye")}
        {this.renderOrgan(Lung, "lung")}
        {this.renderOrgan(Heart, "heart")}
        {this.renderOrgan(Brain, "brain")}
        {this.renderOrgan(Breast, "breast")}
        {this.renderOrgan(Thyroid, "thyroid")}
        {this.renderOrgan(AdrenalGland, "adrenalGland")}
        {this.renderOrgan(Pancreas, "pancreas")}
        {this.renderOrgan(Femur, "femur")}
        {this.renderOrgan(CirculatorySystem, "circulatorySystem")}
        {this.renderOrgan(Esophagus, "esophagus")}
        {this.renderOrgan(Stomach, "stomach")}
        {this.renderOrgan(SmallIntestine, "smallIntestine")}
        {this.renderOrgan(Appendix, "appendix")}
        {this.renderOrgan(Rectum, "rectum")}
        {this.renderOrgan(Anus, "anus")}
        {this.renderOrgan(Duodenum, "duodenum")}
        {this.renderOrgan(Liver, "liver")}
        {this.renderOrgan(GalBladder, "galbladder")}
        {this.renderOrgan(SalivaryGland, "salivaryGland")}
        {this.renderOrgan(Colon, "colon")}
        {this.renderOrgan(UrinaryBladder, "urinaryBladder")}
        {this.renderOrgan(Prostate, "prostate")}
        {this.renderOrgan(SkeletalMuscle, "skeletalMuscle")}
        {this.renderOrgan(Adipose, "adipose")}
        {this.renderOrgan(Skin, "skin")}
      </svg>
    );
  }
}

export default Male;
