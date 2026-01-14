import{j as r,r as C}from"./iframe-ByN7k_Da.js";import{b as p,u as a,F as c,t as j}from"./Form-A9NbCi2n.js";import{R as h,S as x}from"./ResetButton-DsCSi1o1.js";import{B as l}from"./Button-DLduC619.js";import{S as b}from"./Section-DskLKzhN.js";import{A as B}from"./ActionGroup-CeHX0BIO.js";import{s as u}from"./Action-BmGz2Z1M.js";import{T as i}from"./Text-Cb-8LAS5.js";import{C as m}from"./CheckboxButton-alX4qGJe.js";import{C as d}from"./Content-B94SBwdF.js";import{F as E}from"./FieldError-Dqic_FOg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CwJG9Kct.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./clsx-B-dksMZM.js";import"./index-bUl7c0HC.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./context-rGL7bC8_.js";import"./browser-Co1wUnJx.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-D8xEYOuW.js";import"./useRef-BvFrDEXj.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAFU8pmb.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BphJYqm5.js";import"./useFocus-CetkVqMR.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocusable-D-qYSNYm.js";import"./ContextMenuSection-Cx4PBQo5.js";import"./Dialog-Cvkq5YiV.js";import"./RSPContexts-BhXs16ev.js";import"./OverlayArrow-DDuz5amj.js";import"./useControlledState-kSDz6lD9.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./Text-j0nufsIB.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./VisuallyHidden-CV3OLvgc.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./useStatic-BKQ_69l_.js";import"./context-D7USXnL-.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./Checkbox-B611BAzp.js";import"./useFieldComponent-DAKvP2zf.js";import"./FieldError-JBJ_RfAm.js";import"./Form-Ccgq6KTF.js";import"./useFormValidation-C6EqEf55.js";import"./useToggleState-B8ewhbJx.js";import"./useFormReset-Bc5cKrWY.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Wr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Dr as __namedExportsOrder,Wr as default};
