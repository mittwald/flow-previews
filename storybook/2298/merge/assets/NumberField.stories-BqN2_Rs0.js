import{j as r,r as x}from"./iframe-C-RKPwSE.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-1zvyZrSD.js";import{L as o}from"./Label-BZ9U-QOK.js";import{B as p}from"./Button-C4QFurWq.js";import{S as g}from"./Section-DGgswCDI.js";import{A as b}from"./ActionGroup-CdZy8cFO.js";import{s as u}from"./Action-fo4y3mrQ.js";import{N as t}from"./NumberField-Dyua67ck.js";import{F as E}from"./FieldDescription-B46dqL75.js";import{F as S}from"./FieldError-Bk-w_c0r.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4AljtfH.js";import"./flowComponent-_zksvKqG.js";import"./index-ChFaffKJ.js";import"./clsx-B-dksMZM.js";import"./index-NcfLMdM4.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./context-CG0zmStT.js";import"./useRef-DJxmByEC.js";import"./utils-BNo7v4Co.js";import"./ButtonView-lpEgsJ9B.js";import"./browser-BU-qC_3h.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./Text-DceSOphz.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./Text-CWybMa0K.js";import"./LoadingSpinner-B5fSKp-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BUrsQ2n2.js";import"./ProgressBar-CT-OPPKM.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D8JiKPWZ.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./ContextMenuSection-D3zQaczq.js";import"./Dialog-5IYWsYFe.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./VisuallyHidden-lhIVNasT.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./useStatic-CxBkvBNE.js";import"./context-C3Gge9in.js";import"./useFieldComponent-ILpXs27H.js";import"./useControlledHostValueProps-RjkcIy7Z.js";import"./FieldError-BbtVOi4H.js";import"./Form-BmIWUPX1.js";import"./Group-Dxij56r3.js";import"./Input-Dl0Z7qPf.js";import"./useFormValidation-BVV7LE3u.js";import"./useSpinButton-CBrG7cMI.js";import"./useFormReset-Bo6mTD_0.js";import"./useTextField-BfBDvC7_.js";import"./AlertText-F-sJ7jVx.js";import"./AlertIcon-EwQ99KQC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
