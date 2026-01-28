import{j as e}from"./iframe-B-26223i.js";import{F as o}from"./FileCard-DVEUsPSP.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{C as D,M as f}from"./ContextMenu-DWc5pZwk.js";import"./ContextMenuTrigger-Da1fN95X.js";import"./ContextMenuSection-EzbGflNa.js";import{L as C}from"./Label-htHf1MZ3.js";import{P as S}from"./ProgressBar-DyIDjEtW.js";import{T as W}from"./Text-C25EED6m.js";import{B as h}from"./Button-B60fo84_.js";import{x as j,n as B}from"./IconWarning-CfZm6euj.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-Q5gI0VPL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./index-CMj-JRml.js";import"./AlertIcon-Bi7YC7dH.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./context-B9n95xcZ.js";import"./Image-Dwa1XvD9.js";import"./Link-BQLubbaG.js";import"./utils-CprJ_klo.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-DYSsUR82.js";import"./usePress-BlwAXRn7.js";import"./useFocusRing-DATGHg9y.js";import"./useFocusable-CRgLtiVg.js";import"./OptionsButton-BH0Urnof.js";import"./ButtonView-N6QWot1B.js";import"./ContextMenuTriggerView-B_21hL2J.js";import"./Switch-CURBIfIR.js";import"./useFieldComponent-eul3OsXk.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CI32NFO7.js";import"./useFormReset-BQreYCpE.js";import"./useControlledState-CCY4nzRh.js";import"./VisuallyHidden-DpBOnOEH.js";import"./Dialog-COoPEj_z.js";import"./Button-C9Zg0tM0.js";import"./ProgressBar-DwD1l90a.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./useLabel-DUREvcwl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-Braq8AdO.js";import"./OverlayArrow-Cnkc5XCY.js";import"./Collection-DFxwbH7P.js";import"./CollectionBuilder-BqJ1MbN-.js";import"./SelectionIndicator-DrGDjKtL.js";import"./Separator-Bc4LdP2j.js";import"./Text-CrdzXlCc.js";import"./SelectionManager-BbjsNIkI.js";import"./useEvent-C1z2hzAA.js";import"./useCollator-cEvXopFB.js";import"./FocusScope-BG92zKg5.js";import"./Action-CKtvTujB.js";import"./context-JKAIHclB.js";import"./useStatic-DyURBROl.js";import"./browser-DNWQphaZ.js";import"./getActionGroupSlot-BO_i0UUK.js";import"./dynamic-DWm47R25.js";import"./Popover-iofx4eop.js";import"./useOverlayController-Bd-vbTeq.js";import"./OverlayContextProvider-DL8WNCgz.js";import"./OverlayTrigger-DHG4FXf-.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-6huvyJEg.js";import"./EmulatedBoldText-Co4v7GV8.js";import"./LoadingSpinner-CNdw31t2.js";import"./remote-CUr3PG4h.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Re={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "image/png"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sizeInBytes: 47500
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => {
      action("onDelete");
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    href: "#",
    onDelete: () => {
      action("onDelete");
    }
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <FileCard {...props}>
      <ContextMenu>
        <MenuItem>Löschen</MenuItem>
      </ContextMenu>
    </FileCard>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    imageSrc: dummyText.imageSrc
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => {
      action("onDelete");
    },
    href: "#",
    name: undefined
  },
  render: props => <FileCard {...props}>
      <ProgressBar value={2.1} maxValue={3.4} minValue={0} showMaxValue formatOptions={{
      style: "unit",
      unit: "megabyte"
    }}>
        <Label>Image.png</Label>
      </ProgressBar>
    </FileCard>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isFailed: true
  },
  render: props => <FileCard {...props}>
      <Text>Upload failed</Text>
    </FileCard>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: () => action("onDelete"),
    onPress: () => action("onPress")
  },
  render: props => <FileCard {...props}>
      <Button>
        <IconChevronUp />
      </Button>
      <Button>
        <IconChevronDown />
      </Button>
    </FileCard>
}`,...g.parameters?.docs?.source}}};const Ke=["Default","WithType","WithSize","WithOnDelete","WithLink","WithLinkAndOnDelete","WithContextMenu","WithImage","WithProgressBar","Failed","WithButtons"];export{n as Default,u as Failed,g as WithButtons,c as WithContextMenu,d as WithImage,m as WithLink,p as WithLinkAndOnDelete,i as WithOnDelete,l as WithProgressBar,a as WithSize,s as WithType,Ke as __namedExportsOrder,Re as default};
