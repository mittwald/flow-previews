import{r as S,j as r}from"./iframe-BoiTaxGN.js";import{a as n,u as p,F as a,R as u,S as l,t as x}from"./ResetButton-W7v6pmtV.js";import{L as m}from"./Label-DgN2b341.js";import{B as d}from"./Button-MYsVPgLO.js";import{S as j}from"./Section-Cq-t_YW4.js";import{A as b}from"./ActionGroup-aDJBka0X.js";import{s as c}from"./ActionBatch-D2Yqxa5D.js";import{S as s}from"./SearchField-CxURg-Py.js";import{F as E}from"./FieldError-DjT7Sc36.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-X8snMUB4.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./clsx-B-dksMZM.js";import"./index-B9o0n-vC.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./context-hlBZKj-7.js";import"./ActionGroupView-dG558uao.js";import"./Content-Bi6LQS0I.js";import"./Heading-9cwIlFFB.js";import"./Heading-BcC1Qw26.js";import"./RSPContexts-9T8dsftx.js";import"./utils-RetFhwyR.js";import"./Text-ClfpXeTF.js";import"./browser-zBSS86_h.js";import"./EmulatedBoldText-vFeun45o.js";import"./Text-DnUg5-aR.js";import"./Modal-BCaxB9zM.js";import"./useOverlayController-BbkltkAX.js";import"./useStatic-bFyj34a0.js";import"./Overlay-CDL6WOnf.js";import"./OverlayContextProvider-Bv8Ja9wo.js";import"./LoadingSpinner-BBdroSRA.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./Dialog-BL8T3CnU.js";import"./Button-BZbFxF4O.js";import"./ProgressBar-L18yOCjI.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8QgbILE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DoLCzapA.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useFocusable-CNuWQ5Vu.js";import"./OverlayArrow-vd9UrCyT.js";import"./useControlledState-DJPWuI7p.js";import"./Collection-BswXFc7F.js";import"./CollectionBuilder-7YZ1XDUD.js";import"./SelectionIndicator-BQPOHDPg.js";import"./Separator-CUdWNTXS.js";import"./SelectionManager-BSZzvdD0.js";import"./useEvent-CSRhnpf0.js";import"./useCollator-CCHmo4fs.js";import"./FocusScope-p908I3Or.js";import"./VisuallyHidden-CML_0Z6P.js";import"./ButtonView-Jmrl6E5f.js";import"./Flex-BlwptNjQ.js";import"./useRef-CEacQt_r.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CBBb0XeQ.js";import"./getActionGroupSlot-CkMRx6Vr.js";import"./useFieldComponent-DiiGd8t3.js";import"./useControlledHostValueProps-7MsuqVNT.js";import"./FieldError-C1wD6V1t.js";import"./Form-BMda5et4.js";import"./Group-bhKD4yJJ.js";import"./Input-CHjKW2hG.js";import"./useTextField-DcVWSpBm.js";import"./useFormReset-DsmV2EC6.js";import"./useFormValidation-CX6eZKbg.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const o=async F=>{await c(5e3),g(F)},h=p({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=p();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
