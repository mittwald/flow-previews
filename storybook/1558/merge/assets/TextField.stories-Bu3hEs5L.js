import{j as e}from"./iframe-QjFTiyQe.js";import{A as j}from"./ActionGroup-DajdHlfJ.js";import{B as p}from"./Button-DswPXoPV.js";import{L as t}from"./Label-poB2Yhtj.js";import{S as f}from"./Section-dZwQFsPG.js";import{T as o}from"./TextField-D2wy2h8H.js";import{a as V,u as b,F,t as S}from"./Form-BYecuvpb.js";import{s as g}from"./Action-qyNGi_Md.js";import"./index-Cun1SEai.js";import"./dynamic-BXiQW-1E.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-BezXTqeU.js";import"./useStatic-Dq12R2u8.js";import"./IconWarning-I1gVfg4d.js";import"./Text-BZfLsL9o.js";import"./browser-CetGLHjc.js";import"./EmulatedBoldText-B1qs5w8y.js";import"./Text-C66hVS57.js";import"./utils-r8e_N1jc.js";import"./LoadingSpinner-DWbOqfQP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./context-CTF16ofK.js";import"./Button-Czs8nreM.js";import"./ProgressBar-gZUBqeyg.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BzcwXIx3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CnoQHIlJ.js";import"./useFocus-CRsfU1Oq.js";import"./useFocusRing-xi6RBNRG.js";import"./useFocusable-D3z6GPZp.js";import"./ContextMenuSection-JoLTQJFC.js";import"./Popover-B3H4bpbb.js";import"./DialogTriggerView-nOYLeOX3.js";import"./context-Be1upz9q.js";import"./RSPContexts-D-dV82T_.js";import"./ClearPropsContextView-BPsPBjo2.js";import"./useControlledState-Dx1OInf3.js";import"./FocusScope-zGp-W5qB.js";import"./useCollator-CVr4ya_1.js";import"./VisuallyHidden-YhvwkWEW.js";import"./Collection-CqUJc8bm.js";import"./CollectionBuilder-D_prnUUR.js";import"./context-BV634MuB.js";import"./Separator-C2SfW9_n.js";import"./SelectionManager-Da7BobSD.js";import"./useEvent-C1lgvXKS.js";import"./Switch-DhT8Adyz.js";import"./useToggleState-DlGoB95j.js";import"./useFormReset-BGTclNvs.js";import"./TextFieldBase-B7f3kgwh.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-UwL51K-0.js";import"./FieldError-BdyL5myA.js";import"./FieldDescription-BJGpgINQ.js";import"./TextField-BXpWkB4d.js";import"./Form-OD9buFY7.js";import"./Group-P53PcQ1w.js";import"./Input-BiYwJspv.js";import"./useTextField-Bfk55IMV.js";import"./useFormValidation-0HUXiHYd.js";import"./ReactAriaControlledValueFix-y3RmcjqW.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
