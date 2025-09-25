import{j as e}from"./iframe-DSMxFmCo.js";import{A as j}from"./ActionGroup-BvInu9__.js";import{B as p}from"./Button-B4iADtHJ.js";import{L as t}from"./Label-BPw_TKwN.js";import{S as f}from"./Section-DxscDnFL.js";import{T as o}from"./TextField-Bisftq5r.js";import{a as V,u as b,F,t as S}from"./Form-BPy5K8ye.js";import{s as g}from"./Action-BWiQvpwE.js";import"./index-Cun1SEai.js";import"./dynamic-BKY_zed6.js";import"./PropsContextProvider-DVyBiVg_.js";import"./mergeRefs-R9qg0vBI.js";import"./index-GrlXgZoZ.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DXwV-t9Z.js";import"./useStatic-Bf1fNjch.js";import"./IconWarning-BVk6tlGE.js";import"./Text-D_0LfN4x.js";import"./browser-R7FwPwL5.js";import"./EmulatedBoldText-DCelI_Fa.js";import"./Text-CUE1Abh-.js";import"./utils-V6gMnCgM.js";import"./LoadingSpinner-DrTN5ZSN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Dk8jStlZ.js";import"./context-64LigRkb.js";import"./Button-a5-NScD1.js";import"./ProgressBar-X6kaEndn.js";import"./Label-BX8mTcFT.js";import"./Hidden-D2GOYXns.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CGRenFpR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CpWBfHNM.js";import"./useFocus-rqOLNBQE.js";import"./useFocusRing-B0fHsvyn.js";import"./useFocusable-CWTiV4pp.js";import"./ContextMenuSection-DgCSjc-k.js";import"./Popover-JtzXSHjL.js";import"./DialogTriggerView-CRRade0J.js";import"./context-eOFRYD3C.js";import"./RSPContexts-yTBIWgKj.js";import"./ClearPropsContextView-DgWNLgLQ.js";import"./useControlledState-Bd9qDCZc.js";import"./FocusScope-DaPMN8_C.js";import"./useCollator-CouZLuEw.js";import"./VisuallyHidden-D9pE8D_t.js";import"./Collection-BjFS4X2Q.js";import"./CollectionBuilder-Csq46UyD.js";import"./context-n-efbKpz.js";import"./Separator-BzacB-Ho.js";import"./SelectionManager-DnqUUNzH.js";import"./useEvent-CC0ROtua.js";import"./Switch-BIdyu98b.js";import"./useToggleState-D35b7CDH.js";import"./useFormReset-BfhIxfM0.js";import"./TextFieldBase-inE9f89p.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CcqfZkr-.js";import"./FieldError-BW2b_CY4.js";import"./FieldDescription-DiMlr0Yy.js";import"./TextField-CSPqcn3E.js";import"./Form-C9nVsKAF.js";import"./Group-BWyHWrMQ.js";import"./Input-BJPqjrJL.js";import"./useTextField-CR5IN1Cj.js";import"./useFormValidation-64eNngsb.js";import"./ReactAriaControlledValueFix-BewE66gb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
