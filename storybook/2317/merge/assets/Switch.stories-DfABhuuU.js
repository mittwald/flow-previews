import{r as F,j as r}from"./iframe-C_YE0yRE.js";import{a as n,u as p,F as a,R as u,S as l,t as S}from"./ResetButton-D2UrtdpI.js";import{B as d}from"./Button-D40FTP7t.js";import{S as x}from"./Section-BWKpbhUe.js";import{A as E}from"./ActionGroup-BYxz3pVX.js";import{s as c}from"./Action-CzLuBWBI.js";import{S as m}from"./Switch-ChyQ_IKG.js";import{F as j}from"./FieldError-DnihSG5_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNhRkZnt.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./clsx-B-dksMZM.js";import"./index-C1o6XGyU.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./context-BsGh4Cu8.js";import"./useRef-CyvHklD5.js";import"./utils-DHqPz2V6.js";import"./ButtonView-U1F2-uB-.js";import"./browser-BLJ3u5oR.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./Text-DHPE0I2s.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Text-BXWHLDC_.js";import"./LoadingSpinner-CWKEQFJy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRed6E24.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNy1k_Tf.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocusable-CsoKnWSE.js";import"./ContextMenuSection-DRxdJG8v.js";import"./Dialog-BXH836dM.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./VisuallyHidden-DZpEB13Q.js";import"./getActionGroupSlot-C_onwoh9.js";import"./useStatic-C9zmt-CB.js";import"./context-CDhP7Jox.js";import"./useFieldComponent-CWA258Fl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B8Rf9xQv.js";import"./useFormReset-CEMPEkJX.js";import"./FieldError-C56-tCSc.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Pr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(m,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field1"})}),r.jsxs(m,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
