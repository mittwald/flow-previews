import{j as r,r as x}from"./iframe-BwTc9KkQ.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-DnBeQq07.js";import{L as o}from"./Label-BbbV6hPu.js";import{B as p}from"./Button-Ckvz-MCb.js";import{S as g}from"./Section-C6exBiSb.js";import{A as b}from"./ActionGroup-DFlQAehv.js";import{s as u}from"./Action-BhNW5Llg.js";import{N as t}from"./NumberField-BWUX83De.js";import{F as E}from"./FieldDescription-B41gpymH.js";import{F as S}from"./FieldError-BhKB-hqh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BE4DvzFx.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./clsx-B-dksMZM.js";import"./index-C6-tpPRF.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./context-BwyA9HG-.js";import"./useRef-sbMflI1L.js";import"./utils-CBQcEIVx.js";import"./ButtonView-BIDw_mr1.js";import"./browser-vKZ8hCbx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./Text-Gc4XBNKO.js";import"./EmulatedBoldText-nz1iuJug.js";import"./Text-DngMYAZH.js";import"./LoadingSpinner-lc_9xcB8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DqSxrgNL.js";import"./ProgressBar-CaYu3rjO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BSSuBv8C.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CJeMKVhz.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useFocusable-B00zaX18.js";import"./ContextMenuSection-LW48IjXN.js";import"./Dialog-DfJHDuJ2.js";import"./RSPContexts-DUJ8CZ2M.js";import"./OverlayArrow-DC7WkuhA.js";import"./useControlledState-DJoARPq6.js";import"./Collection-Dw9lmv_g.js";import"./CollectionBuilder-O788RXXq.js";import"./SelectionIndicator-CWwUcpBG.js";import"./Separator-DSMZMwnt.js";import"./SelectionManager-BszBT5Go.js";import"./useEvent-DNrOKzwb.js";import"./useCollator-D6rhmeJa.js";import"./FocusScope-D13mvD2r.js";import"./VisuallyHidden-BgOZVVaM.js";import"./getActionGroupSlot-CPP3dnXc.js";import"./useStatic-D7wzuZGA.js";import"./context-BTkxUDR7.js";import"./useFieldComponent-D1bp3yFp.js";import"./useControlledHostValueProps-CGmEN8BG.js";import"./FieldError-B40__s1G.js";import"./Form-CXxVDbS0.js";import"./Group-BaqfBrUe.js";import"./Input-C8bkJupR.js";import"./useFormValidation-BAeTIVc2.js";import"./useSpinButton-AAIjW0Fe.js";import"./useFormReset-38634gnl.js";import"./useTextField-CS5fspsv.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
