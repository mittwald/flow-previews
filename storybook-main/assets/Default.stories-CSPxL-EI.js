import{r as h,j as r}from"./iframe-D6IogGzN.js";import{P as m}from"./PasswordCreationField-DO233_Hq.js";import{L as u}from"./Label-CevfIrA7.js";import{B as g}from"./Button-4bsuig8G.js";import{m as C}from"./IconWarning-CDNOZZaQ.js";import{C as w}from"./CopyButton-CNcAuEyV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOTSgjbA.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./clsx-B-dksMZM.js";import"./index-D5OmXbhN.js";import"./Action-CdCNq_o6.js";import"./context-C3OW4m7r.js";import"./useStatic-BI3MLON7.js";import"./browser-JB3DJ3rF.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./FieldDescription-CHk77VTi.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./utils-DGVDGTqS.js";import"./Tooltip-D0fuWApA.js";import"./OverlayArrow-AHInXUcQ.js";import"./useFocus-JSiA5HpL.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./context-D_0iO3JE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DeVFSene.js";import"./useControlledState-DoPmGGFu.js";import"./useFocusable-CqeTIxtx.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./ContextualHelpTrigger-6Aiew60f.js";import"./Popover-Bko44XEP.js";import"./useOverlayController-wzkI43Df.js";import"./OverlayContextProvider-V3LFD1Iu.js";import"./Dialog-SQEPLKiU.js";import"./Button-BjufwbKz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-OPUq1uX5.js";import"./RSPContexts-Y8HBeOxz.js";import"./Collection-C7w1JPu7.js";import"./CollectionBuilder-BDnI44sl.js";import"./SelectionIndicator-C7krvdos.js";import"./Separator-BIJp8TvF.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./VisuallyHidden-CtfXU_Om.js";import"./OverlayTrigger-IpTzHf0r.js";import"./Heading-DudhsRUa.js";import"./Heading-BP-CAVCT.js";import"./useFieldComponent-DWOteHG6.js";import"./FieldError-s9c2Hgmm.js";import"./FieldError-CQOrVEPx.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";import"./useControlledHostValueProps-C7phVJY7.js";import"./TextField-ByX6MQQi.js";import"./Form-DHrkWV8M.js";import"./Group-CgQOg1YP.js";import"./Input-DZPKJfFh.js";import"./useTextField-Dmh39Twp.js";import"./useFormReset-zYUel0fa.js";import"./useFormValidation-CGjfwGDf.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BmFbjzPt.js";import"./remote-ByQLcsaA.js";import"./react-children-utilities-5e0YRQKc.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
