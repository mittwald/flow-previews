import{j as e}from"./iframe-ct20Zc4_.js";import{A as j}from"./ActionGroup-Bna3ZFOy.js";import{B as p}from"./Button-D_7HTG7B.js";import{L as t}from"./Label-Dr2f8Urt.js";import{S as f}from"./Section-9uE5FTdJ.js";import{T as n}from"./TextField-TD3U9_uV.js";import{a as V,u as b,F,t as S}from"./Form-Bx4qtmFG.js";import{s as g}from"./Action-BP61FP92.js";import"./dynamic-tkuqvrvh.js";import"./PropsContextProvider-CgsWNoxz.js";import"./mergeRefs-6DcqMVoC.js";import"./index-DEpD1rGL.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-DgDgHkEO.js";import"./useStatic-x6Peb5cY.js";import"./IconWarning-CcsQkvTO.js";import"./Text-DcjvjsPV.js";import"./browser-Cy4n9sSP.js";import"./EmulatedBoldText-CxSwZZv_.js";import"./Text-BxKbsi5b.js";import"./utils-DpMwq36_.js";import"./LoadingSpinner-UirJOZi_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CzDXjL81.js";import"./context-DnCGX3ZW.js";import"./Button-DDK8DVRp.js";import"./ProgressBar-CK-tPEaL.js";import"./Label-Acl7hQj6.js";import"./Hidden-B9i9z_Z9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cp6IFTTd.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C5fNoyVy.js";import"./useFocus-BkH8qcCX.js";import"./useFocusRing-D8miGa7N.js";import"./useFocusable-CQ8WqruE.js";import"./ContextMenuSection-9u3YjVGW.js";import"./Popover-DidQYUqo.js";import"./DialogTriggerView-Dw2hBdec.js";import"./context-BYoyCjQY.js";import"./RSPContexts-C51MpexI.js";import"./ClearPropsContextView-YUez0bQh.js";import"./useControlledState-CwKmYwnv.js";import"./FocusScope-B8eJTcfl.js";import"./useCollator-CiYYIB6D.js";import"./VisuallyHidden-TqoC2igt.js";import"./Collection-IIiQ3cHk.js";import"./CollectionBuilder-hbCRLoQk.js";import"./Separator-C0MPI4X4.js";import"./Group-DAb_r1xm.js";import"./SearchField-nImGJb9R.js";import"./FieldError-kSnIjzvs.js";import"./Form-BSds6g5P.js";import"./useTextField-B0tvR0aW.js";import"./useFormReset-DrqvUx_9.js";import"./TextField-BxnrnSEC.js";import"./useEvent-u8lVOPY0.js";import"./SelectionManager-C0f7nk4D.js";import"./Switch-aXekOSm3.js";import"./useToggleState-9f45isSY.js";import"./TextFieldBase-Bz8_kCur.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-3QHdAtoW.js";import"./FieldDescription-CdEx8efJ.js";import"./ReactAriaControlledValueFix-BECyaTuY.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
