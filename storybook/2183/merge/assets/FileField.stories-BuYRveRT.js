import{j as r,r as x}from"./iframe-ChZoSAk9.js";import{u as l,F as a}from"./Form-0HSZJT_W.js";import{L as s}from"./Label-BtQBKk3e.js";import{F as c,t as j}from"./Field-Dene1CiM.js";import{B as t}from"./Button-igkSssls.js";import{S}from"./Section-aVFZU63j.js";import{A as b}from"./ActionGroup-BqXbSba3.js";import{s as u}from"./Action-CVNqq51W.js";import{F as m}from"./FileField-C0KmJQlK.js";import{F as B}from"./FieldError-D0FcbU4f.js";import{R as d}from"./ResetButton-D8t4HRTr.js";import{S as p}from"./SubmitButton-2qWtJAAu.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B8p5n3S3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTDVwaga.js";import"./index-DWAP1jQp.js";import"./index-0x3bxhbi.js";import"./useLocalizedStringFormatter-D3af8G-N.js";import"./context-CKHtHj1o.js";import"./Label-8-s2XGsR.js";import"./utils-3orXHcy8.js";import"./Hidden-BToicrtl.js";import"./dynamic-D_MCnPMN.js";import"./IconApp-jg62nbZM.js";import"./remote-CMT6q-r_.js";import"./IconX-DwN0CpwU.js";import"./IconCheck-Cb9yObnt.js";import"./Text-DeId_uwd.js";import"./EmulatedBoldText-D79YiaqZ.js";import"./Text-DWCX6muZ.js";import"./LoadingSpinner-hNvoN1cU.js";import"./ariaLive-BdEv9LdA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BAWw_35t.js";import"./ProgressBar-Bd4jHgjB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwTIrFfL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BEbKEOpz.js";import"./useFocus-BEqWk0b2.js";import"./useFocusRing-sg_VmrXT.js";import"./useFocusable-BQrvJ6Oj.js";import"./ContextMenuSection-b1V79oDp.js";import"./lib-90ocxLs-.js";import"./Dialog-B1ggtFGC.js";import"./RSPContexts-BuIIeKa7.js";import"./OverlayArrow-BwEdTwQI.js";import"./useControlledState-CXwLHBKW.js";import"./Collection-CxsVz65g.js";import"./CollectionBuilder-Dc1RsPXG.js";import"./SelectionIndicator-BZmDBgq9.js";import"./Separator-h8DcfgTk.js";import"./SelectionManager-B2umJv1d.js";import"./useEvent-D5qx-uIw.js";import"./useCollator-DVwfKBY9.js";import"./FocusScope-DTg-yLmD.js";import"./VisuallyHidden-TRsVH-0B.js";import"./getActionGroupSlot-D9Q9Xlmq.js";import"./useStatic-YkfQLHoK.js";import"./context-DK_eOJFA.js";import"./useFormValidation-DrPCugNK.js";import"./FieldError-krJUZi9_.js";import"./Input-C1UIQQj8.js";import"./useFieldComponent-CTbZHLtq.js";import"./IconDanger-bNuP_yaN.js";import"./useRef-ChzQuoTx.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Tr={title:"Integrations/React Hook Form/FileField",component:c,render:()=>{const e=async h=>{await u(5e3),y(h)},f=l({defaultValues:{user:""}}),F=j();return r.jsx(a,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,kr as __namedExportsOrder,Tr as default};
