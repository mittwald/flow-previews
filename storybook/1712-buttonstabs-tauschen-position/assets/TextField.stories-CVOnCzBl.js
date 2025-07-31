import{j as e}from"./iframe-Cf8YTZ8I.js";import{A as j}from"./ActionGroup-BQWC78tS.js";import{B as p}from"./Button-BNQl0TTz.js";import{L as o}from"./Label-D1xaprCz.js";import{S as f}from"./Section-zeFi0SXJ.js";import{T as n}from"./TextField-mo3G4D3y.js";import{a as N,u as b,F,t as S}from"./Form-CfmK70vm.js";import{s as O}from"./Action-tsI3lj2n.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BFOZlr1C.js";import"./useStatic-B_n6r0Ik.js";import"./IconWarning-qh9NwBsS.js";import"./Text-CzCYKR38.js";import"./browser-DfZCu7HF.js";import"./EmulatedBoldText-5p9uCxGs.js";import"./Text-CQanMjNI.js";import"./utils-mApyKjAg.js";import"./LoadingSpinner-CGCXLsJe.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./context-D-u3TSjV.js";import"./Button-BRubt609.js";import"./ProgressBar-rV3H6G0W.js";import"./Label-CYpSb4aj.js";import"./Hidden-CFe2gnmC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kBnuahGK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjpkCDJv.js";import"./useFocus-_Kohxctg.js";import"./useFocusRing-WtizUsSm.js";import"./useFocusable-n963r6Th.js";import"./ContextMenuSection-9alUKIRu.js";import"./Dialog-6YoxT38u.js";import"./RSPContexts-Dm9xNQ69.js";import"./OverlayArrow-HeKEp-x3.js";import"./useControlledState-J34_Aqnk.js";import"./Collection-CMDC5_M-.js";import"./CollectionBuilder-CsDuHlxm.js";import"./Separator-DLSAHNez.js";import"./Group-DhHWVTLL.js";import"./SearchField-Diw_8zQw.js";import"./FieldError-CCTqX3Np.js";import"./Form-C0YUiO3s.js";import"./useTextField-Bh5lkpvQ.js";import"./useFormReset-Ctmxo4kM.js";import"./TextField-BlSj4EDo.js";import"./useEvent-ZIquWn1z.js";import"./SelectionManager-CdSvY_6Y.js";import"./useCollator-C0E035kT.js";import"./FocusScope-Bp1tS9Sq.js";import"./VisuallyHidden-CDGiYjfo.js";import"./TextFieldBase-DsBI6lGo.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-rTkgz3KB.js";import"./FieldDescription-DUC1vBpE.js";import"./ReactAriaControlledValueFix-ZES-PpH9.js";import"./context-ByqUf3rB.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};
