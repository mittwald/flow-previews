import{r as v,j as e}from"./iframe-C_YE0yRE.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-D2UrtdpI.js";import{L as i}from"./Label-Bg9ChY99.js";import{B as x}from"./Button-D40FTP7t.js";import{S as k}from"./Section-BWKpbhUe.js";import{A as O}from"./ActionGroup-BYxz3pVX.js";import{s as d}from"./Action-CzLuBWBI.js";import{C as n}from"./CheckboxGroup-Dv3yqzo-.js";import{C as r}from"./Checkbox-DOOFv6et.js";import{F as b}from"./FieldDescription-DreGB0lk.js";import{F}from"./FieldError-DnihSG5_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DNhRkZnt.js";import"./flowComponent-BmGOFz_C.js";import"./index-ChMIoTzt.js";import"./clsx-B-dksMZM.js";import"./index-C1o6XGyU.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./context-BsGh4Cu8.js";import"./useRef-CyvHklD5.js";import"./utils-DHqPz2V6.js";import"./ButtonView-U1F2-uB-.js";import"./browser-BLJ3u5oR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./Text-DHPE0I2s.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./Text-BXWHLDC_.js";import"./LoadingSpinner-CWKEQFJy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DRed6E24.js";import"./ProgressBar-kMuFl8PJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNy1k_Tf.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocusable-CsoKnWSE.js";import"./ContextMenuSection-DRxdJG8v.js";import"./Dialog-BXH836dM.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./VisuallyHidden-DZpEB13Q.js";import"./getActionGroupSlot-C_onwoh9.js";import"./useStatic-C9zmt-CB.js";import"./context-CDhP7Jox.js";import"./ColumnLayout-BPX_plNf.js";import"./useMakeFocusable-gXOjzDrv.js";import"./useFieldComponent-CWA258Fl.js";import"./FieldError-C56-tCSc.js";import"./Form-OCRgsrlm.js";import"./useFormValidation-CAUZ7uHC.js";import"./useToggleState-B8Rf9xQv.js";import"./useFormReset-CEMPEkJX.js";import"./AlertText-CldvHevT.js";import"./AlertIcon-ClTjLU4k.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Me=["Default","WithFieldError","WithFocus"];export{l as Default,m as WithFieldError,c as WithFocus,Me as __namedExportsOrder,We as default};
