import{j as e}from"./iframe-DkzCwCX4.js";import{A as j}from"./ActionGroup-C8VolYTb.js";import{B as p}from"./Button-BnlekXC3.js";import{L as t}from"./Label-BxAVz1UC.js";import{S as f}from"./Section-DmfqvBI5.js";import{T as n}from"./TextField-JDOJmh6H.js";import{a as V,u as b,F,t as S}from"./Form-Dq-LmidO.js";import{s as g}from"./Action-waCXg2Hq.js";import"./dynamic-BbyFekY5.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-OrHKCra6.js";import"./useStatic-DPeMNtEl.js";import"./IconWarning-DW3eva0Y.js";import"./Text-nAHNspGp.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";import"./Text-lQk_ytCv.js";import"./utils-CLIXtwVU.js";import"./LoadingSpinner-CQddXTjo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./context-R4HBJhIj.js";import"./Button-BmtE6ca-.js";import"./ProgressBar-BPpVJdpP.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo4yNuZG.js";import"./useFocus-ib9l0UKV.js";import"./useFocusRing-D8oCWed-.js";import"./useFocusable-DGleC9_O.js";import"./ContextMenuSection-DDW5roO_.js";import"./Popover-DLWa551b.js";import"./DialogTriggerView-C0Uk_5SJ.js";import"./context-C3VhVMcy.js";import"./RSPContexts-ypxcCxo7.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./useControlledState-BOJEDAaV.js";import"./FocusScope-DTdzqE55.js";import"./useCollator-CJfXA3qY.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Collection-DoEHjGcH.js";import"./CollectionBuilder-BePk8bko.js";import"./Separator-uSA5LFxj.js";import"./Group-0pV7udqg.js";import"./SearchField-Cdw14afw.js";import"./FieldError-Jo1S5986.js";import"./Form-Bd46is8r.js";import"./useTextField-DDEFSut-.js";import"./useFormReset-Dtav30sm.js";import"./TextField-DIeR-UPB.js";import"./useEvent-D_rPsZtc.js";import"./SelectionManager-Dg3ay1FE.js";import"./Switch-CIZmIw2v.js";import"./useToggleState-BRwNVh6w.js";import"./TextFieldBase-DJQnyO3J.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-ZxrKxv-k.js";import"./FieldDescription-CBKqvqxl.js";import"./ReactAriaControlledValueFix-Bp1vPYDx.js";import"./chunk-PULGOXDA-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Me={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async m=>{await g(1500),N(m)},o=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:o.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(n,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{N(m)},o=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:o,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:o.watch("name"),onChange:m=>{o.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
