import{j as r,r as x}from"./iframe-EUG4rdOg.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-CYKdI8jW.js";import{L as o}from"./Label-CkXKJRQj.js";import{B as p}from"./Button-CEake6G1.js";import{S as g}from"./Section-BL7lUYfi.js";import{A as b}from"./ActionGroup-BZH42G79.js";import{s as u}from"./Action-DJ1WPhSw.js";import{N as t}from"./NumberField-D_9Bq0wo.js";import{F as E}from"./FieldDescription-CfDsKzz3.js";import{F as S}from"./FieldError-D_yigqvG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-NoN6qZ.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./clsx-B-dksMZM.js";import"./index-Dmbpubym.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./context-DxYQrQkA.js";import"./useRef-oohqBRQZ.js";import"./utils-DJPQq0Ir.js";import"./ButtonView-BC_ryqYl.js";import"./browser-Dr5hWFfi.js";import"./Label.module-CUYTf9Jc.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./Text-DlICJI4S.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Text-BNRjjFE0.js";import"./LoadingSpinner-CJqmAtLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-_TVwxj4G.js";import"./ProgressBar-CixwbPNP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyxS_pZ-.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./ContextMenuSection-BWaZOiqV.js";import"./Dialog-ClYDKCvQ.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./useControlledState-DorIVmrH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./VisuallyHidden-DwLUyGt6.js";import"./getActionGroupSlot-nY47Clec.js";import"./useStatic-uvHDPGza.js";import"./context-B_Qm6y3p.js";import"./useFieldComponent-Bs969hQl.js";import"./useControlledHostValueProps-CMq5JcbC.js";import"./FieldError-CVa256dc.js";import"./Form-DdP99ZP3.js";import"./Group-BRdCtfwm.js";import"./Input-BJHxReEX.js";import"./useFormValidation-OWtbzU_T.js";import"./useSpinButton-C4vTKrGI.js";import"./useFormReset-BWBNxDQ8.js";import"./useTextField-DlJ5_TSW.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
