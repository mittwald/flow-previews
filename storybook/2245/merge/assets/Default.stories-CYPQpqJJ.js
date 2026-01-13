import{j as e}from"./iframe-DoM-BIwg.js";import{F as o}from"./FileCard-CzaEshEK.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{C as D,M as f}from"./ContextMenu-DUoeFJuf.js";import"./ContextMenuTrigger-uZXkOw7N.js";import"./ContextMenuSection-fUiEQtti.js";import{L as C}from"./Label-BFVzgZLR.js";import{P as S}from"./ProgressBar-Z8s2raek.js";import{T as W}from"./Text-lsEUOuuk.js";import{B as h}from"./Button-CT5Y8uWS.js";import{x as j,n as B}from"./IconWarning-BD_MiEVG.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-_EfPfu08.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bw05Ss5u.js";import"./index-B9vDCLP1.js";import"./index-BXuzzWnK.js";import"./AlertIcon-Mg7Q3zgv.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./context-CSqA08Z3.js";import"./Image-QAdDKG7N.js";import"./Link-CVu6uEhJ.js";import"./utils-D5il_mPj.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./OptionsButton-DDGNjhy9.js";import"./ButtonView-CsTLUfbB.js";import"./ContextMenuTriggerView-laxeBppj.js";import"./Switch-Da0k57Hq.js";import"./useFieldComponent-CZ4YFclL.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ix8SyQp2.js";import"./useFormReset-DsbUUfuN.js";import"./useControlledState--GEywRyg.js";import"./VisuallyHidden-GPtOnQVg.js";import"./Dialog-BESdyj17.js";import"./Button-BXmw0khj.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./useLabel-Cp7FQmHU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./Text-CiXcXSql.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./Action-KkrISRwO.js";import"./context-DP2lyaT2.js";import"./useStatic-BCI8JZji.js";import"./browser-COZAGKbB.js";import"./getActionGroupSlot-CjJPVShT.js";import"./dynamic-CkeXur7S.js";import"./Popover-Cl8R87oW.js";import"./useOverlayController-DJQxd8wz.js";import"./OverlayContextProvider-Evthga4H.js";import"./OverlayTrigger-6Bd8m9uJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-uhDX3NtQ.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./LoadingSpinner-CPr3D27j.js";import"./remote-BDffDiLd.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Re={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
