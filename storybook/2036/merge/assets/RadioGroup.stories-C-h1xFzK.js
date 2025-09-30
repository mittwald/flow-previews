import{j as r}from"./iframe-BxDpVhRd.js";import{a as x,u as j,F as f,t as O}from"./Form-CR4vr6SN.js";import{L as n}from"./Label-CMeeurCB.js";import{B as s}from"./Button-COfabfFq.js";import{S as b}from"./Section-DXdLzCuH.js";import{A as g}from"./ActionGroup-DNCuAw2y.js";import{s as S}from"./Action-CQ_Tet5k.js";import{R as m,b as e}from"./RadioButton-D3dbdMQl.js";import"./index-Cun1SEai.js";import"./dynamic-ByIuCnCH.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./clsx-B-dksMZM.js";import"./FieldError-Bmq-pcAK.js";import"./IconWarning-CR1PBxFk.js";import"./FieldError-BrR5GiZM.js";import"./utils-CpjREF5t.js";import"./Text-Bq0GBBEx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./context-CSPhd592.js";import"./browser-DkE4SP-u.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./Text-HfVZjSfr.js";import"./EmulatedBoldText-Di64OaFb.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJ12dAAc.js";import"./ProgressBar-CjBgSU-K.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cfg_1SLq.js";import"./useFocus-DCdhMrgy.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./ContextMenuSection-D81CeDCG.js";import"./Popover-DsSNZzMW.js";import"./DialogTriggerView-GlI_-8yJ.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useControlledState-B0hr1ZXY.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";import"./Switch-TSGUx7eD.js";import"./useMakeFocusable-DOqtKzac.js";import"./useToggleState-GJ2JDvNb.js";import"./useFormReset-BdOLdhs-.js";import"./getActionGroupSlot-DfO33wTs.js";import"./ColumnLayout-B6p1lfaG.js";import"./FormField.module-CqWyJNQI.js";import"./RadioGroup-C2IKY9Nj.js";import"./Form-DnVdWn9l.js";import"./useFormValidation-BO_UVXRs.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,B=v("submit"),Vr={title:"Integrations/React Hook Form/RadioGroup",component:x,render:()=>{const o=async F=>{await S(1500),B(F)},R=j({defaultValues:{gender:"",genderDefaultValue:"diverse",genderRequired:""}}),a=O();return r.jsx(f,{form:R,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(a,{name:"gender",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderDefaultValue",children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(a,{name:"genderRequired",rules:{required:"Please select your gender"},children:r.jsxs(m,{children:[r.jsx(n,{children:"Gender"}),r.jsx(e,{value:"male",children:"Male"}),r.jsx(e,{value:"female",children:"Female"}),r.jsx(e,{value:"diverse",children:"Diverse"})]})}),r.jsx(g,{children:r.jsx(s,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=j();return r.jsxs(f,{form:o,onSubmit:()=>v("submitted"),children:[r.jsx(x,{name:"text",rules:{required:!0},children:r.jsxs(m,{m:[1,1],l:[1,1,1],children:[r.jsx(n,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(s,{onPress:()=>o.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(s,{onPress:()=>o.setFocus("text"),children:"focus through form"}),r.jsx(s,{type:"submit",children:"Submit"})]})}};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};const Ir=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Ir as __namedExportsOrder,Vr as default};
