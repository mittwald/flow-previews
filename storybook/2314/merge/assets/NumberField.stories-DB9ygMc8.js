import{r as x,j as r}from"./iframe-CLJtUSH1.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-BLXcg6zO.js";import{L as o}from"./Label-CL2lxKWa.js";import{B as p}from"./Button-BdSBoC_f.js";import{S as g}from"./Section-CZHmN5Jd.js";import{A as b}from"./ActionGroup-BIdm5xS5.js";import{s as u}from"./Action-B5Dc0NVU.js";import{N as t}from"./NumberField-FoUvEGq0.js";import{F as E}from"./FieldDescription-Durr1uPe.js";import{F as S}from"./FieldError-DOHJV3_t.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6if2hzUD.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./clsx-B-dksMZM.js";import"./index-C5KxKItK.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./useRef-C6pb-qXv.js";import"./utils-DvtEjNbs.js";import"./ButtonView-DmFKtMwL.js";import"./browser-BMt8iY1_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./Text-B6Fe6olk.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./Text-COsBjVJz.js";import"./LoadingSpinner-D1C6LJRF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGFUplit.js";import"./ProgressBar-eED3hhac.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DV7QK5Z-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-bTiOWaRI.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useFocusable-DsRGTtrf.js";import"./ContextMenuSection-DdrBdwjw.js";import"./Dialog-BGKaFNBq.js";import"./RSPContexts-CY0Qb7bk.js";import"./OverlayArrow-Do6HgTy2.js";import"./useControlledState-BRozYY3l.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useEvent-B0QpT_fK.js";import"./useCollator-CG3ZLIsg.js";import"./FocusScope-DhCz7nLk.js";import"./VisuallyHidden-CPqjoTjm.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./useStatic-Dks4Zmqh.js";import"./context-jvIE4x8v.js";import"./useFieldComponent-BH0Y7qa0.js";import"./useControlledHostValueProps-DozfvDTN.js";import"./FieldError-DZmbq2tb.js";import"./Form-DsvsQY6J.js";import"./Group-D9i1M0Ig.js";import"./Input-CzVRJw_9.js";import"./useFormValidation-vO_E-FCH.js";import"./useSpinButton-DPaHlIPe.js";import"./useFormReset-3JYpIfMS.js";import"./useTextField-DNGW8mQ7.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
