import{j as e}from"./iframe-CP2gb4h4.js";import{A as j}from"./ActionGroup-CJ9XWexY.js";import{B as p}from"./Button-D4XL1rEM.js";import{L as t}from"./Label-Bjeja2lg.js";import{S as f}from"./Section-CWQqQqHK.js";import{T as n}from"./TextField-CJ_Em8yj.js";import{a as V,u as b,F,t as S}from"./Form-CPdZ6NEz.js";import{s as g}from"./Action-BlPiRLea.js";import"./index-Cun1SEai.js";import"./dynamic-BzAgy5gg.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./clsx-B-dksMZM.js";import"./index-Cu5Se3_L.js";import"./getActionGroupSlot-BJG8VOJK.js";import"./useStatic-B6aSEDsB.js";import"./IconWarning-D-rMLbvq.js";import"./Text-D1BFrV-v.js";import"./browser-Cy2PTbDb.js";import"./EmulatedBoldText-DPtC43a-.js";import"./Text-CxBtgOGW.js";import"./utils-D_s8y5un.js";import"./LoadingSpinner-CCoJakpE.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./context-BA56fXp2.js";import"./Button-BqMMv05B.js";import"./ProgressBar-antzpYY8.js";import"./Label-683tI7vQ.js";import"./Hidden-BIuobSa8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-INWae1Ce.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B35msVos.js";import"./useFocus-DJT_GDyJ.js";import"./useFocusRing-B2VMeUUD.js";import"./useFocusable-B9L3OVB4.js";import"./ContextMenuSection-DLwH6dLj.js";import"./Dialog-BATijwiU.js";import"./RSPContexts-CjMIBS3_.js";import"./OverlayArrow-DcwP4WPp.js";import"./useControlledState-4L3XIdhl.js";import"./Collection-O2YnEgLD.js";import"./CollectionBuilder-Cm1DEo3g.js";import"./context-ScZH95Xu.js";import"./Separator-DiCclCCI.js";import"./SelectionManager-Dx1qQpQA.js";import"./useEvent-rLgwngju.js";import"./useCollator-CVHtnlLz.js";import"./FocusScope-8zrVT8FZ.js";import"./VisuallyHidden-GZJ9Ibhy.js";import"./TextFieldBase-DuQBRhIs.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CTYByr6I.js";import"./FieldError-DU2mNmYP.js";import"./FieldDescription-Bo22LU1X.js";import"./TextField-DU8gOWaW.js";import"./Form-BiW8oAj_.js";import"./Group-DgudsDcS.js";import"./Input-BVND2dLL.js";import"./useTextField-D-ukG109.js";import"./useFormReset-DVyobQZd.js";import"./useFormValidation-D0HOvZ_-.js";import"./ReactAriaControlledValueFix-BQYXCjP1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-DCT4qJcM.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ue=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ue as __namedExportsOrder,Me as default};
