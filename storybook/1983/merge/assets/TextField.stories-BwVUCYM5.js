import{j as e}from"./iframe-DjIVRH0F.js";import{A as j}from"./ActionGroup-Dv82y2TA.js";import{B as p}from"./Button-CKSxfzxQ.js";import{L as t}from"./Label-oyqcLq-C.js";import{S as f}from"./Section-BO0o4b9e.js";import{T as n}from"./TextField-OZwHkFZg.js";import{a as V,u as b,F,t as S}from"./Form-CcZpKu0K.js";import{s as g}from"./Action-D8dMCYGJ.js";import"./dynamic-BVw0yKPJ.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-vPbFTM92.js";import"./useStatic-CHo6Lgk7.js";import"./IconWarning-uc5JkYTm.js";import"./Text-B5KpGvlT.js";import"./browser-Ba6KZWy-.js";import"./EmulatedBoldText-BSrsAcTM.js";import"./Text-9ugGFdig.js";import"./utils-G1KHONaq.js";import"./LoadingSpinner-BHwXHxWg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./context-C7KKbhVC.js";import"./Button-D_xR0uNa.js";import"./ProgressBar-BaoSLR_g.js";import"./Label-C0V31i8v.js";import"./Hidden-BYb4omOQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-sV0m1Yjo.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-QkjqUEXJ.js";import"./useFocus-diUUCuvP.js";import"./useFocusRing-CVljaIJQ.js";import"./useFocusable-DNULE2pv.js";import"./ContextMenuSection-CVHoYolo.js";import"./Popover-DlX03nO8.js";import"./DialogTriggerView-CgY0Mhwe.js";import"./context-DDhUpvCG.js";import"./RSPContexts-yaPVYaSw.js";import"./ClearPropsContextView-BhG_516u.js";import"./useControlledState-Cd9JFs6w.js";import"./FocusScope-CAKHANYN.js";import"./useCollator-CAX-XvSk.js";import"./VisuallyHidden-snqvTAFU.js";import"./Collection-CjltVSE8.js";import"./CollectionBuilder-CJ_fIWoO.js";import"./Separator-BOn94nxb.js";import"./Group-C6OJiXrI.js";import"./SearchField-CkG4r_An.js";import"./FieldError-NAgWSsRG.js";import"./Form-Dzmx2_fB.js";import"./useTextField-CS3TmGDB.js";import"./useFormReset-BnKMoc5n.js";import"./TextField-BtiUxXGx.js";import"./useEvent-DGXxwH7A.js";import"./SelectionManager-Btp5kxfY.js";import"./Switch-ByLZsw9C.js";import"./useToggleState-BPM3bXC_.js";import"./TextFieldBase-Ctq2Gvfg.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BR6tEJBc.js";import"./FieldDescription-MCxveWnQ.js";import"./ReactAriaControlledValueFix-BO_bl36T.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
