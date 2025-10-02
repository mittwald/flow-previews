import{j as r}from"./iframe-hiH37hms.js";import{a as x,u as j,F as f,t as O}from"./Form-Dyo8yiYK.js";import{L as n}from"./Label-DzM9UWDP.js";import{B as s}from"./Button-BrzTi3gr.js";import{S as b}from"./Section-B8yRiADO.js";import{A as g}from"./ActionGroup-CmCahmkF.js";import{s as S}from"./Action-BsGu1LRs.js";import{R as m,b as e}from"./RadioButton-DPVTtMcd.js";import"./index-Cun1SEai.js";import"./dynamic-BmCJXizF.js";import"./flowComponent-00c8POVD.js";import"./index-CTy9APi5.js";import"./clsx-B-dksMZM.js";import"./index-BJu77HCL.js";import"./useLocalizedStringFormatter-BRvamSQ7.js";import"./context-DRH00eGt.js";import"./browser-BuBe5AKm.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C0jnYKOc.js";import"./utils-JHWv327y.js";import"./Hidden-XcASwwlw.js";import"./IconWarning-Cse0Xf0Q.js";import"./Text-CsOmTVyE.js";import"./EmulatedBoldText-BNkr3bPM.js";import"./Text-UKwjxOKq.js";import"./LoadingSpinner-DMdJqtIF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BSe0nnji.js";import"./ProgressBar-CDjSE3x2.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BhsWghka.js";import"./useFocus-B9-o-MIg.js";import"./useFocusRing-WUR2BD9e.js";import"./useFocusable-C2_7lwWJ.js";import"./ContextMenuSection-Co8KQTmA.js";import"./Dialog-i0N_hzHI.js";import"./RSPContexts-DTJHlpNa.js";import"./OverlayArrow-CEJUr9iX.js";import"./useControlledState-BFPCb-Qt.js";import"./Collection-BgRsBBN2.js";import"./CollectionBuilder-DEp0jGGn.js";import"./context-BuwG6neX.js";import"./Separator-DghpaL2h.js";import"./SelectionManager-CSTWFJsn.js";import"./useEvent-CS-uDTBx.js";import"./useCollator-5PyA7SnE.js";import"./FocusScope-C5smDGs3.js";import"./VisuallyHidden-C5VBpvXq.js";import"./getActionGroupSlot-BVQ8sE7Q.js";import"./useStatic-8hqO5zoY.js";import"./context-riC63IcS.js";import"./FieldError-BChewV0h.js";import"./FormField.module-CapR5K3V.js";import"./react-children-utilities-CYBZOoJV.js";import"./ColumnLayout-BM6Rfps9.js";import"./useMakeFocusable-CTKbAYTu.js";import"./RadioGroup-CZvQbV1z.js";import"./Form-stGXRgys.js";import"./useFormValidation-DybUzXH7.js";import"./useFormReset-BDeOlo8n.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Pr={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return r.jsx(f,{form:R,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(a,{name:"gender",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderDefaultValue",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return r.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsxs(m,{m:[1,1],l:[1,1,1],children:[r.jsx(n,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
