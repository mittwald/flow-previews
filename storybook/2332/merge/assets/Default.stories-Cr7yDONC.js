import{j as e}from"./iframe-B-dt22EB.js";import{F as o}from"./FileCard-ouwAlq4b.js";import{d as x}from"./dummyText-CX_I_Wpl.js";import{C as D,M as f}from"./MenuItem-DE2PUUyS.js";import"./ContextMenuTrigger-CqEI6DDS.js";import"./ContextMenuSection-3gHTEPd_.js";import{L as C}from"./Label-DPQ9pprY.js";import{P as S}from"./ProgressBar-DKqWb_1W.js";import{T as W}from"./Text-BCqKdXYs.js";import{B as h}from"./Button-Cfktl1nd.js";import{C as j,n as B}from"./IconWarning-BbozUbXF.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-s1mi0UBn.js";import"./clsx-B-dksMZM.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./index-D5JlC3xK.js";import"./AlertIcon-B1kQf0Ru.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./context--H9enp2q.js";import"./Image-BCZQw-rb.js";import"./Link-BI5jJCyV.js";import"./utils-DoxtMd58.js";import"./filterDOMProps-BNnC3YgW.js";import"./useFocus-9GLlZYuH.js";import"./usePress-CgYKrzfD.js";import"./useFocusRing-6FfHDt87.js";import"./useFocusable-C0Z9ZNeY.js";import"./OptionsButton-CnIcXKnX.js";import"./ButtonView-DMF5dkJg.js";import"./ContextMenuTriggerView-DXEFma3U.js";import"./ActionBatch-DMUImU48.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./browser-CJi_ki0i.js";import"./getActionGroupSlot-DUUveJ77.js";import"./dynamic-Ci7OcZKZ.js";import"./Popover-52nhHqtt.js";import"./OverlayContextProvider-COc2hxmN.js";import"./Dialog-C7TrFuKD.js";import"./Button-CjYcjBnT.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./useLabel-BKpYilGg.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./RSPContexts-pIsu_52Z.js";import"./OverlayArrow-Drn8uqTb.js";import"./useControlledState-jk51FjyI.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./Text-vBmBwiIT.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./Switch-N2fkKqP1.js";import"./useFieldComponent-D2j3Q6-m.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DTz9iBTS.js";import"./useFormReset-BwldCtpD.js";import"./LoadingSpinner-ISzATTs8.js";import"./OverlayTrigger-MgjR2AzX.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-e-20uz9H.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./remote-D6Q14pEz.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,Ee={title:"Upload/FileCard",component:o,args:{name:"image.jpg"},render:r=>e.jsx(o,{...r})},n={},s={args:{type:"image/png"}},a={args:{sizeInBytes:47500}},i={args:{onDelete:()=>{t("onDelete")}}},m={args:{href:"#"}},p={args:{href:"#",onDelete:()=>{t("onDelete")}}},c={render:r=>e.jsx(o,{...r,children:e.jsx(D,{children:e.jsx(f,{children:"Löschen"})})})},d={args:{imageSrc:x.imageSrc}},l={args:{onDelete:()=>{t("onDelete")},href:"#",name:void 0},render:r=>e.jsx(o,{...r,children:e.jsx(S,{value:2.1,maxValue:3.4,minValue:0,showMaxValue:!0,formatOptions:{style:"unit",unit:"megabyte"},children:e.jsx(C,{children:"Image.png"})})})},u={args:{isFailed:!0},render:r=>e.jsx(o,{...r,children:e.jsx(W,{children:"Upload failed"})})},g={args:{onDelete:()=>t("onDelete"),onPress:()=>t("onPress")},render:r=>e.jsxs(o,{...r,children:[e.jsx(h,{children:e.jsx(j,{})}),e.jsx(h,{children:e.jsx(B,{})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const Re=["Default","WithType","WithSize","WithOnDelete","WithLink","WithLinkAndOnDelete","WithContextMenu","WithImage","WithProgressBar","Failed","WithButtons"];export{n as Default,u as Failed,g as WithButtons,c as WithContextMenu,d as WithImage,m as WithLink,p as WithLinkAndOnDelete,i as WithOnDelete,l as WithProgressBar,a as WithSize,s as WithType,Re as __namedExportsOrder,Ee as default};
