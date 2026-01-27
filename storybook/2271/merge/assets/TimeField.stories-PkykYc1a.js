import{j as r,r as x}from"./iframe-BEQP9uXD.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-DdaJGn48.js";import{L as t}from"./Label-ULyyAOQY.js";import{B as l}from"./Button-C9UvHdV0.js";import{S as b}from"./Section-CiWy9GDM.js";import{A as E}from"./ActionGroup-BV_YmXox.js";import{s as c}from"./Action-DdIVuJ0B.js";import{L as S}from"./DateInput-BaeM1APS.js";import{T as o}from"./TimeField-NhFPvJpE.js";import{F as T}from"./FieldError-DcwQV8mK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAr_-wMD.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./clsx-B-dksMZM.js";import"./index-COHhcPte.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./context-DjvYmnOm.js";import"./useRef-CBNU1Kxo.js";import"./utils-CvsvUfaH.js";import"./ButtonView-Cr-9skPP.js";import"./browser-D8S-En3T.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./Text-BQmA_ZwI.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLAt4FO4.js";import"./ProgressBar-CsmWPwQb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjEuYOvC.js";import"./useFocus-DENBDZ81.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./ContextMenuSection-Xp9S-BLD.js";import"./Dialog-DQ54l-rN.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./useControlledState-IAFCDfDW.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./VisuallyHidden-BLDMQ79k.js";import"./getActionGroupSlot-B63naLE5.js";import"./useStatic-DVE9BYeG.js";import"./context-DGvxxzOj.js";import"./FieldError-WngkcyXU.js";import"./Form-BbvSEhBq.js";import"./Group-CxkWfpob.js";import"./Input-Cnu3k7gd.js";import"./useFormValidation-Kra5hQIO.js";import"./useFormReset-QF_OYRwm.js";import"./useSpinButton-DnaVHxtH.js";import"./useFilter-CDs1bh4a.js";import"./useFieldComponent-BKGW_bMF.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
