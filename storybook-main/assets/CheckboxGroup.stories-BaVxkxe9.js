import{j as r}from"./iframe-D_6zdLny.js";import{a as c,u,F as h,t as j}from"./Form-CRAgCDt6.js";import{L as i}from"./Label-DYStaM4r.js";import{B as l}from"./Button-Hd0_GbPh.js";import{S as b}from"./Section-BOMWvKE6.js";import{A as f}from"./ActionGroup-DJbcBDj6.js";import{s as d}from"./Action-CDIAK01E.js";import{C as s}from"./CheckboxGroup-CWY7ktv0.js";import{C as e}from"./Checkbox-CLy9n07h.js";import{F as p}from"./FieldDescription-BmjEGOaL.js";import"./index-nuYtCEEu.js";import"./dynamic-fYYLqg_-.js";import"./flowComponent-OxdpfLz0.js";import"./index-BGrQFvII.js";import"./clsx-B-dksMZM.js";import"./index-CT6ZSgMj.js";import"./FieldError-ojCue57q.js";import"./IconWarning-L8yPVfI5.js";import"./FieldError-DAmKGBgj.js";import"./utils-PQD-Pczy.js";import"./Text-YMXmaajA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLocalizedStringFormatter-D5MFHXmv.js";import"./context-BMSZp_sq.js";import"./browser-D7xr6uHh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-iDSBX_9z.js";import"./Hidden-BN9nl5w0.js";import"./Text-BucMQu3s.js";import"./EmulatedBoldText-BmP07Dnx.js";import"./LoadingSpinner-Ca7TZ2j1.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dk-D3x3z.js";import"./ProgressBar-DN3pMQzV.js";import"./useLabel-BujF7oZS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-HrT7PLB3.js";import"./useFocus-D07R-Di8.js";import"./useFocusRing-CwU_FKgG.js";import"./useFocusable-pGYT2QRf.js";import"./ContextMenuSection-DVDgi3BO.js";import"./Dialog-RcAnAvxk.js";import"./RSPContexts-0i8aci_3.js";import"./OverlayArrow-vA-0UH51.js";import"./useControlledState-G8Ia7XKM.js";import"./Collection-ChPbS13-.js";import"./CollectionBuilder-C8yRBwY3.js";import"./SelectionIndicator-aPzlcNCf.js";import"./Separator-CHFb939R.js";import"./SelectionManager-BR7WMr9Q.js";import"./useEvent-GLo2x5KR.js";import"./useCollator-NS9MLfPk.js";import"./FocusScope-DgQ0PiWF.js";import"./VisuallyHidden-NfEP0AbA.js";import"./getActionGroupSlot-qiCOl6fG.js";import"./useStatic-MV172PRo.js";import"./context-BfwnKq6d.js";import"./ColumnLayout-CjZJDwMA.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-CL_92pgO.js";import"./Form-BEwxiqG9.js";import"./useFormValidation-B8Bdwi3p.js";import"./useToggleState-BXMhRIJO.js";import"./useFormReset-jO9kfZl0.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,C=v("submit"),Er={title:"Integrations/React Hook Form/CheckboxGroup",component:c,render:()=>{const o=async t=>{await d(1500),C(t)},x=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),n=j();return r.jsx(h,{form:x,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(n,{name:"interests",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsDefaultValue",children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(n,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(p,{children:"Check at least 1 item"})]})}),r.jsx(n,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(s,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(p,{children:"Check max 2 items"})]})}),r.jsx(f,{children:r.jsx(l,{type:"submit",children:"Submit"})})]})})}},m={},a={render:()=>{const o=u();return r.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"text",rules:{required:!0},children:r.jsxs(s,{l:[1,1,1],m:[1,1],children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(l,{type:"submit",children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]}>
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
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};const qr=["Default","WithFocusAndError"];export{m as Default,a as WithFocusAndError,qr as __namedExportsOrder,Er as default};
