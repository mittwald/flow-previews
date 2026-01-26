import{j as r,r as x}from"./iframe-CO_SbVCH.js";import{b as a,u as l,F as d,t as j}from"./Form-CKDpo35Y.js";import{L as o}from"./Label-CYi7f71w.js";import{R as c,S as f}from"./ResetButton-DQlSeI9_.js";import{B as p}from"./Button-D1ylE5rB.js";import{S as b}from"./Section-DzQL888J.js";import{A as g}from"./ActionGroup-Y22B5gXp.js";import{s as u}from"./Action-0SsHJzT_.js";import{N as t}from"./NumberField-BobnyNFX.js";import{F as E}from"./FieldDescription-C20y_Jsx.js";import{F as S}from"./FieldError-ApIzqFqI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7BzGeVfl.js";import"./flowComponent-CeLLqyNG.js";import"./index-BeUgZiCh.js";import"./clsx-B-dksMZM.js";import"./index-CiuYSwxA.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./context-CagKbUB8.js";import"./browser-DqZUP5aL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DuIRh-OA.js";import"./utils-D6Fob7yO.js";import"./Hidden-ZdS7KL-c.js";import"./useRef-BtpKrvaf.js";import"./IconWarning-DnAYmwAM.js";import"./remote-CpzHRyGl.js";import"./Text-DxwcuI28.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./Text-CKhrTn1e.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B5AHzCCb.js";import"./ProgressBar-B7Qw6Oz5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dh95oJrl.js";import"./useFocus-CPWqIWXE.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./ContextMenuSection-m6biFtp2.js";import"./Dialog-UmHwq-hs.js";import"./RSPContexts-BwOC89i_.js";import"./OverlayArrow-D4OM36Ak.js";import"./useControlledState-BplPLiu_.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./VisuallyHidden-DDIsYkXL.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./useStatic-D6cqHfiz.js";import"./context-BbDJJF8K.js";import"./useFieldComponent-DVhqfPKz.js";import"./useControlledHostValueProps-B4-ZmfcU.js";import"./FieldError-C8I7NIV7.js";import"./Form-BhtxhsPb.js";import"./Group-DHq-dfDY.js";import"./Input-Cf-031DZ.js";import"./useFormValidation-Cv-TUnys.js";import"./useSpinButton-NbNTVo1G.js";import"./useFormReset-DQMHGRs0.js";import"./useTextField-D7nnFmGf.js";import"./AlertText-BQJ0P8Cx.js";import"./AlertIcon-3Vdm-iqE.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),kr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(g,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Cr as __namedExportsOrder,kr as default};
