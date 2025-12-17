import{j as e,r as v}from"./iframe-CxIv4jMu.js";import{u as p,F as u}from"./Form-CR1_gMxu.js";import{L as i}from"./Label-B_OvHsx4.js";import{F as h,t as C}from"./Field-D2srFMWr.js";import{B as x}from"./Button-Bv_lacgK.js";import{S as k}from"./Section-B37yKHjp.js";import{A as O}from"./ActionGroup-COg7tlsY.js";import{s as d}from"./Action-Cq4Le8fd.js";import{F as b}from"./FieldDescription-BwqMpCOu.js";import{F}from"./FieldError-DD8s_Iuw.js";import{C as n}from"./CheckboxGroup-VRzb2K3H.js";import{C as r}from"./Checkbox-CI-7TOS5.js";import{R as j}from"./ResetButton-DmOGQWLj.js";import{S as f}from"./SubmitButton-kW04vR8W.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-mUCbKcee.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./Label-V3_Oag-T.js";import"./utils-BWuSdLWz.js";import"./Hidden-BIUsGAI2.js";import"./dynamic-BljurmiM.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./Text-D7X_oIFw.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-FNhyxeGp.js";import"./ProgressBar-azejEpMz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";import"./ContextMenuSection-CJBAyCsT.js";import"./lib-90ocxLs-.js";import"./Dialog-RjPLqENq.js";import"./RSPContexts-B1brESnT.js";import"./OverlayArrow-C0nssBLY.js";import"./useControlledState-BE-Fn8Ja.js";import"./Collection-qySzQ4Tg.js";import"./CollectionBuilder-DsWaPC9T.js";import"./SelectionIndicator-BuBcSB3l.js";import"./Separator-DMSGPcYD.js";import"./SelectionManager-Do_Ta6ts.js";import"./useEvent-C9rtN4FC.js";import"./useCollator-CNR9Oibt.js";import"./FocusScope-D8y0iQpb.js";import"./VisuallyHidden-UJJZphkq.js";import"./getActionGroupSlot-D-5616e_.js";import"./useStatic-WZbZ24So.js";import"./context-Di3B4AKc.js";import"./FieldError-B56fKNUE.js";import"./IconDanger-WvpDQ4XT.js";import"./ColumnLayout-BvaoAxGP.js";import"./useMakeFocusable-Cl5TyGvP.js";import"./useFieldComponent-gOqU5qjG.js";import"./IconCheckboxEmpty-BIJ-o5gT.js";import"./Form-48q0jMI2.js";import"./useFormValidation-NfxZ5VuI.js";import"./useToggleState-CF9wiReq.js";import"./useFormReset-BBuG3pIa.js";import"./useRef-CPw7e6ym.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ye={title:"Integrations/React Hook Form/CheckboxGroup",component:h,render:()=>{const s=async t=>{await d(1500),E(t)},o=p({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(u,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},m={},a={render:s=>{const o=p();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=p();return e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...c.parameters?.docs?.source}}};const Je=["Default","WithFieldError","WithFocus"];export{m as Default,a as WithFieldError,c as WithFocus,Je as __namedExportsOrder,Ye as default};
