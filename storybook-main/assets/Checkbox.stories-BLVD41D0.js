import{r as x,j as r}from"./iframe-DYxqCFL4.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-DZYHoig3.js";import{B as d}from"./Button-DGbEpLIN.js";import{S as j}from"./Section-BBD9utnH.js";import{A as b}from"./ActionGroup-BmI-EAdu.js";import{s as u}from"./ActionBatch-BfjBVLTQ.js";import{C as t}from"./Checkbox-B3xDCNua.js";import{F as E}from"./FieldError-sWm_iZNp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8CcPw_G.js";import"./flowComponent-SnxdO0ip.js";import"./index-CMV8c4GV.js";import"./clsx-B-dksMZM.js";import"./index-DJ6wSCwd.js";import"./useLocalizedStringFormatter-B6u7Awnk.js";import"./context-CfMfa2C9.js";import"./ActionGroupView-DEw0JaMM.js";import"./Content-DzIiqqqA.js";import"./Heading-HOIK8yqY.js";import"./Heading-DbYjHDJK.js";import"./RSPContexts-DXUT3Wo8.js";import"./utils-C1fpOvwY.js";import"./Text-BnII0mKt.js";import"./browser-CmbZy-PD.js";import"./EmulatedBoldText-D6xSemQT.js";import"./Text-B3xsuc84.js";import"./Modal-DUoogNsU.js";import"./Overlay-CnLralOh.js";import"./useOverlayController-BZwKG1Aj.js";import"./useStatic-BMoi980u.js";import"./OverlayContextProvider-tFRc17qj.js";import"./LoadingSpinner-BY4JXLJQ.js";import"./IconWarning-BGRYHRhg.js";import"./remote-WwxW7fyl.js";import"./Dialog-CiGSJFZ7.js";import"./Button-BPYpcxnx.js";import"./ProgressBar-Cu5usRFF.js";import"./Label-DwTYNUmc.js";import"./Hidden-B_geUQU0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-mobDYg92.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DMR80VPZ.js";import"./useFocus-C6GqelOx.js";import"./useFocusRing-Byzp35A7.js";import"./useFocusable-8bvqGkWP.js";import"./OverlayArrow-R2NHUYtB.js";import"./useControlledState-Co5SihOL.js";import"./Collection-CpIPCaxL.js";import"./CollectionBuilder-B3eaJP6J.js";import"./SelectionIndicator-D_wBgdeg.js";import"./Separator-3N5Q9dE4.js";import"./SelectionManager-BMzSjOT-.js";import"./useEvent-CIxnPnFa.js";import"./useCollator-sfCu5teu.js";import"./FocusScope-BC21MQ9n.js";import"./VisuallyHidden-CZrO0U0i.js";import"./ButtonView-CL1jDIH8.js";import"./Flex-BH_NinKX.js";import"./useRef-BD_w6wL8.js";import"./ContextMenuSection-BPGq4V6i.js";import"./getActionGroupSlot-ChAJy8AN.js";import"./useFieldComponent-DjSvrfgm.js";import"./FieldError-B9AV5Ok7.js";import"./Form-C4EYd143.js";import"./useFormValidation-FkHTzTfc.js";import"./useToggleState-dw2qq8cb.js";import"./useFormReset-VwcIZGsw.js";import"./AlertText-D5ZV5CrS.js";import"./AlertIcon-B9fJ359s.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
