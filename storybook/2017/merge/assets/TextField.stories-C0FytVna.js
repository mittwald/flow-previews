import{j as e}from"./iframe-ygucezpU.js";import{A as j}from"./ActionGroup-CWPG_uZX.js";import{B as p}from"./Button-Dsp-uMAe.js";import{L as t}from"./Label-CDLmKIyL.js";import{S as f}from"./Section-Kqktu6Cz.js";import{T as o}from"./TextField-71dUTslZ.js";import{a as V,u as b,F,t as S}from"./Form-DbLu0b0l.js";import{s as g}from"./Action-M3zsMwUk.js";import"./index-Cun1SEai.js";import"./dynamic-DtVcInqU.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-igF58ako.js";import"./useStatic-B18UmQuP.js";import"./IconWarning-Cs0D7_PK.js";import"./Text-c8GLfZrX.js";import"./browser-BpjCDOvP.js";import"./EmulatedBoldText-oasbrdcJ.js";import"./Text-DGTV1FYP.js";import"./utils-Dm2BIGqk.js";import"./LoadingSpinner-DHdSJfkf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./context-DzmzBjoy.js";import"./Button-CrpDhUsv.js";import"./ProgressBar-CbOwlFL2.js";import"./Label-BffVQixZ.js";import"./Hidden-sZrOLhP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BIOlG5Yn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqrMcV_T.js";import"./useFocus-BBcZge3l.js";import"./useFocusRing-CFbBFNPO.js";import"./useFocusable-CmrOOHc4.js";import"./ContextMenuSection-CLZ0Yijm.js";import"./Popover-BoT9uJpy.js";import"./DialogTriggerView-C9zXFnun.js";import"./context-stas4iuT.js";import"./RSPContexts-Bg25W6Pr.js";import"./ClearPropsContextView-DkeNy3v-.js";import"./useControlledState-y1NsnI_K.js";import"./FocusScope-kmUkL49h.js";import"./useCollator-CZ70YDPg.js";import"./VisuallyHidden-CIvyEb44.js";import"./Collection-CP_tcz-x.js";import"./CollectionBuilder-ZRNciRSk.js";import"./context-Bf2zQWgY.js";import"./Separator-CbVhXDvO.js";import"./SelectionManager-D4AWNFz3.js";import"./useEvent-Dau2XfVg.js";import"./Switch-D6rmBzD3.js";import"./useToggleState-CLa0kjOM.js";import"./useFormReset-CqyvH-u7.js";import"./TextFieldBase-C_WYMTeA.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DDKUc_sF.js";import"./FieldError-DAYQ7QfD.js";import"./FieldDescription-BpCD0Rfv.js";import"./TextField-BbxH2TaW.js";import"./Form-BvlELYJ2.js";import"./Group-CBEz0WD9.js";import"./Input-B7REfsMR.js";import"./useTextField-DtO-7VKy.js";import"./useFormValidation-CdOk873P.js";import"./ReactAriaControlledValueFix-Dt6l_KdS.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ie=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ie as __namedExportsOrder,Ge as default};
