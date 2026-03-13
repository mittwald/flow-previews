import{j as r}from"./iframe-BFddea_x.js";import{N as t}from"./NumberField-BeMPzXJX.js";import{L as o}from"./Label-Cyz25dCh.js";import{F as l}from"./FieldDescription-DqsHbSnc.js";import{F as d}from"./FieldError-BfmusLP_.js";import{C as u,a as c}from"./ContextualHelpTrigger-DL49s42d.js";import{B as x}from"./Button-DmFob37h.js";import{T as g}from"./Text-B70YymId.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DrOhnKye.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./clsx-B-dksMZM.js";import"./index-CcOYdQtn.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./useControlledHostValueProps-xZ--AIC6.js";import"./Button-uqpwtIjO.js";import"./utils-D-aZUMcZ.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./context-CaZH5px0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./FieldError-Dj7b6ixT.js";import"./Text-DndMRLn5.js";import"./Form-Cmx7zRsN.js";import"./Group-ChkAGHz_.js";import"./Input-DbK2aUtO.js";import"./useControlledState-lfI_swTV.js";import"./useFormValidation-CYvJLeFF.js";import"./useSpinButton-1pG5mt9H.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./useFormReset-C1U9nA2s.js";import"./useCollator-CHE9npsz.js";import"./useTextField-C79BrPY1.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./Popover-BbCf_utC.js";import"./useOverlayController-D1CCctag.js";import"./useStatic-4M_8h910.js";import"./OverlayContextProvider-BO6i0G2D.js";import"./Dialog-Dko8Qxf5.js";import"./RSPContexts-DrvlE6Qo.js";import"./OverlayArrow-CVHTB2zR.js";import"./Collection-2_PEsREq.js";import"./CollectionBuilder-CCaeaC6n.js";import"./SelectionIndicator-Dk7Ow--3.js";import"./Separator-7xqgbQ15.js";import"./SelectionManager-BwPLSKUJ.js";import"./FocusScope-QY6lrLAj.js";import"./VisuallyHidden-Bi0J0mAL.js";import"./OverlayTrigger-Yb2ddAp1.js";import"./LoadingSpinner-BTSUDAP0.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Dr={title:"Form Controls/NumberField",component:t,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},render:e=>r.jsx(t,{onChange:h("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(l,{children:"Enter your age"})]})},s={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},p={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(d,{children:"Age is required"})]})},m={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},n={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(u,{children:[r.jsx(x,{ariaSlot:null}),r.jsx(c,{children:r.jsx(g,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...n.parameters?.docs?.source}}};const Wr=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,n as WithContextualHelp,s as WithDefaultValue,a as WithFieldDescription,p as WithFieldError,m as WithUnit,Wr as __namedExportsOrder,Dr as default};
