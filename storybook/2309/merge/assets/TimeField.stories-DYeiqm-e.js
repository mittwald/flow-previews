import{r as x,j as r}from"./iframe-BAXQY30e.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-D0JxP27a.js";import{L as t}from"./Label-DhF_BRrp.js";import{B as l}from"./Button-CvDqM7Lu.js";import{S as b}from"./Section-BVe0LGVq.js";import{A as E}from"./ActionGroup-BudZkh0v.js";import{s as c}from"./Action-CDH3oaiQ.js";import{L as S}from"./DateInput-CAk3zdmE.js";import{T as o}from"./TimeField-icq85-Ku.js";import{F as T}from"./FieldError-D1QPRlMW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0Mu-qEnq.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./clsx-B-dksMZM.js";import"./index-BAu7LBGH.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./context-Ch7cvv9N.js";import"./useRef-DMh8YqdE.js";import"./utils-CPq9a2_3.js";import"./ButtonView-DderywPS.js";import"./browser-7M05TLI2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./LoadingSpinner-JX83AFJj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Ca5Nx2F5.js";import"./ProgressBar-DOlyg40u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-0WoXV1eK.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./useFocusable-B7f7k6Nb.js";import"./ContextMenuSection-CYSyIaWU.js";import"./Dialog-BnZvghEV.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";import"./getActionGroupSlot-CKOsA57z.js";import"./useStatic-rplOn2Qs.js";import"./context-DKCDV3-b.js";import"./FieldError-RUpMVejq.js";import"./Form-CMcE9GN0.js";import"./Group-DP8yEYC_.js";import"./Input-Dt_0h10s.js";import"./useFormReset-CqoQKslx.js";import"./useFormValidation-DAvMLm6e.js";import"./useSpinButton-BII39R_t.js";import"./useFilter-C2Oqp9jE.js";import"./useFieldComponent-RBMXOPsB.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
