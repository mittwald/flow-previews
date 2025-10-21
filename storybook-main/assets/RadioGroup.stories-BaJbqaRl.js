import{j as r}from"./iframe-Cxe2R7_6.js";import{a as x,u as j,F as f,t as O}from"./Form-J2UUhBWk.js";import{L as n}from"./Label-BvEZKMSr.js";import{B as s}from"./Button-DDreAfBq.js";import{S as b}from"./Section-CTCBpNMs.js";import{A as g}from"./ActionGroup-3nPo4GGD.js";import{s as S}from"./Action-g8e46b99.js";import{R as m,b as e}from"./RadioButton-Cx34c5cL.js";import"./index-Cun1SEai.js";import"./dynamic-C5ZbgSqQ.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./clsx-B-dksMZM.js";import"./index-C9WdiMZF.js";import"./FieldError-DJ7xx1bf.js";import"./IconWarning-Jidhe8u4.js";import"./FieldError-C0Ib8VCD.js";import"./utils-DyWdIPZh.js";import"./Text-DwJdwITw.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./browser-eQsbTmR1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./Text-BRz7lILS.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./ContextMenuSection-Bi1QxvNY.js";import"./Dialog-Ch6Gf7aG.js";import"./RSPContexts-BTHaIq-S.js";import"./OverlayArrow-BxgQp36F.js";import"./useControlledState-B5CLhXq4.js";import"./Collection-C-iX88s0.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./SelectionIndicator-BZBAluCS.js";import"./Separator-TUkk8FpW.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./useStatic-CcLu1Qpn.js";import"./context-DVixImBB.js";import"./ColumnLayout-DfR0UMqq.js";import"./FormField.module-CqWyJNQI.js";import"./useMakeFocusable-DEGrXNpK.js";import"./RadioGroup-CbdsT4Wr.js";import"./Form-xSvri39Q.js";import"./useFormValidation-Bu_33Brb.js";import"./useFormReset-ClXq3Rv0.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Pr={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return r.jsx(f,{form:R,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(a,{name:"gender",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderDefaultValue",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return r.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsxs(m,{m:[1,1],l:[1,1,1],children:[r.jsx(n,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={() => action("submitted")}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <RadioGroup m={[1, 1]} l={[1, 1, 1]}>
            <Label>Options</Label>
            <Radio value="1">Option 1</Radio>
            <Radio value="2">Option 2</Radio>
            <Radio value="3">Option 3</Radio>
            <Radio value="4">Option 4</Radio>
            <Radio value="5">Option 5</Radio>
            <Radio value="6">Option 6</Radio>
          </RadioGroup>
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
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Mr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Mr as __namedExportsOrder,Pr as default};
