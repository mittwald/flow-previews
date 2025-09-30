import{j as e}from"./iframe-k0i0tSJI.js";import{A as j}from"./ActionGroup-BFolwK6W.js";import{B as p}from"./Button-oL_0-1Fa.js";import{L as t}from"./Label-qKeJblmJ.js";import{S as f}from"./Section-Hr4HvyZZ.js";import{T as o}from"./TextField-BiNK0lNC.js";import{a as V,u as b,F,t as S}from"./Form-ulMUJonf.js";import{s as g}from"./Action-rR3xN66w.js";import"./index-Cun1SEai.js";import"./dynamic-BLAyWru4.js";import"./PropsContextProvider-tjPYyEf7.js";import"./mergeRefs-BRZ6RM1F.js";import"./index-C9Xz1mMc.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-CCMGQIVd.js";import"./useStatic-6jrFBcb4.js";import"./IconWarning-Dg2SDivU.js";import"./Text-Cgxvqary.js";import"./browser-4UXY86st.js";import"./EmulatedBoldText-DDmG2Q6m.js";import"./Text-BxPl3Uwa.js";import"./utils-BgzpsI0V.js";import"./LoadingSpinner-DmRdTw1-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D4FOu5sH.js";import"./context-C6mYXPQf.js";import"./Button-S7ehKHFA.js";import"./ProgressBar-BxBVznBa.js";import"./Label-CrL1n18B.js";import"./Hidden-B4FAVo4g.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-r92EfUV9.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BmNwYdlA.js";import"./useFocus-rEgPF8zF.js";import"./useFocusRing-CO9MadZb.js";import"./useFocusable-B3ABF-8R.js";import"./ContextMenuSection-IOVcwMb-.js";import"./Popover-CS1cgM-c.js";import"./DialogTriggerView-B91ZJb8_.js";import"./context-Cc3HDEYK.js";import"./RSPContexts-DMQIQMHx.js";import"./ClearPropsContextView-Br7mo-KY.js";import"./useControlledState-ydeueESl.js";import"./FocusScope-CCUvRh1k.js";import"./useCollator-CWffamPy.js";import"./VisuallyHidden-DWX3G_l5.js";import"./Collection-BePmPaDd.js";import"./CollectionBuilder-8mCwZtNW.js";import"./context-CLpMNAUD.js";import"./Separator-BiKptde_.js";import"./SelectionManager-BsMwmSFL.js";import"./useEvent-BKfze8FD.js";import"./Switch-B3sHBAbd.js";import"./useToggleState-BCbr7zxa.js";import"./useFormReset-DpoZWz7L.js";import"./TextFieldBase-CpOW1b2A.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-DmBkReI5.js";import"./FieldError-9szde7-f.js";import"./FieldDescription-95JlyvjO.js";import"./TextField-B9iRNtfV.js";import"./Form-Dqp5q8Rw.js";import"./Group-DaB8Aw8e.js";import"./Input-DArPZQ3a.js";import"./useTextField-BhPReeNg.js";import"./useFormValidation-CoaqJdcD.js";import"./ReactAriaControlledValueFix-DdfAVWxh.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
