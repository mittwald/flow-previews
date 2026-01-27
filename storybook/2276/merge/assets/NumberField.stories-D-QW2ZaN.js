import{j as r,r as x}from"./iframe-BbrP11p-.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-C3DIgWLZ.js";import{L as o}from"./Label-DwqHoWx5.js";import{B as p}from"./Button-D_6ZCoU5.js";import{S as g}from"./Section-OZiyRnMf.js";import{A as b}from"./ActionGroup-aeCzi1SV.js";import{s as u}from"./Action-DGTK2X9F.js";import{N as t}from"./NumberField-CNvbbpdj.js";import{F as E}from"./FieldDescription-BZIDgIPl.js";import{F as S}from"./FieldError-i_FUROXt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CazQQjW9.js";import"./flowComponent-Bjf10jjx.js";import"./index-l4GzuhKJ.js";import"./clsx-B-dksMZM.js";import"./index-CvmJvI2t.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./context-Cg0av1qu.js";import"./useRef-Cn0hFIKG.js";import"./utils-CfXF9mMB.js";import"./ButtonView-vY_sxMN2.js";import"./browser-CKsvW9Gw.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./Text-BLzGfhm5.js";import"./EmulatedBoldText-j9VeSllR.js";import"./Text-BmgQOLJ4.js";import"./LoadingSpinner-CoKKKOJW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQobJtX3.js";import"./ProgressBar-DY9U0Kry.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VHqnVNy0.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocusable-ssdBLHPa.js";import"./ContextMenuSection-Djx2ksVO.js";import"./Dialog-BH0tiGTi.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./VisuallyHidden-BCVFUf4T.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./useStatic-DG6eeeN5.js";import"./context-DfqDLyvd.js";import"./useFieldComponent-CnZp8uAU.js";import"./useControlledHostValueProps-BXJu_wEe.js";import"./FieldError-C0mMT85u.js";import"./Form-Da-PMQ7G.js";import"./Group-CeCxvCTb.js";import"./Input-CrFs98bJ.js";import"./useFormValidation-dfDtwXtG.js";import"./useSpinButton-B3XQssuC.js";import"./useFormReset-VtyCL_TW.js";import"./useTextField-Bxx5stu4.js";import"./AlertText-7tARt4Et.js";import"./AlertIcon-B3ByzjK4.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
