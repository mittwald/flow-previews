import{j as r,r as x}from"./iframe-BEQP9uXD.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-DdaJGn48.js";import{L as o}from"./Label-ULyyAOQY.js";import{B as p}from"./Button-C9UvHdV0.js";import{S as g}from"./Section-CiWy9GDM.js";import{A as b}from"./ActionGroup-BV_YmXox.js";import{s as u}from"./Action-DdIVuJ0B.js";import{N as t}from"./NumberField-ku0gqJid.js";import{F as E}from"./FieldDescription-rVRfuQA7.js";import{F as S}from"./FieldError-DcwQV8mK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAr_-wMD.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./clsx-B-dksMZM.js";import"./index-COHhcPte.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./context-DjvYmnOm.js";import"./useRef-CBNU1Kxo.js";import"./utils-CvsvUfaH.js";import"./ButtonView-Cr-9skPP.js";import"./browser-D8S-En3T.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./Text-BQmA_ZwI.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLAt4FO4.js";import"./ProgressBar-CsmWPwQb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjEuYOvC.js";import"./useFocus-DENBDZ81.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./ContextMenuSection-Xp9S-BLD.js";import"./Dialog-DQ54l-rN.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./useControlledState-IAFCDfDW.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./VisuallyHidden-BLDMQ79k.js";import"./getActionGroupSlot-B63naLE5.js";import"./useStatic-DVE9BYeG.js";import"./context-DGvxxzOj.js";import"./useFieldComponent-BKGW_bMF.js";import"./useControlledHostValueProps-CCaFJO-n.js";import"./FieldError-WngkcyXU.js";import"./Form-BbvSEhBq.js";import"./Group-CxkWfpob.js";import"./Input-Cnu3k7gd.js";import"./useFormValidation-Kra5hQIO.js";import"./useSpinButton-DnaVHxtH.js";import"./useFormReset-QF_OYRwm.js";import"./useTextField-DjOri4ui.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
