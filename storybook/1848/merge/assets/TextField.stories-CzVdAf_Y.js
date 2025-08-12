import{j as e}from"./iframe-Czve8Ng1.js";import{A as j}from"./ActionGroup-C0o4bhxw.js";import{B as p}from"./Button-D73APsNA.js";import{L as o}from"./Label-FUFGZTqe.js";import{S as f}from"./Section-DEA4irc9.js";import{T as n}from"./TextField-BwpKOGTo.js";import{a as N,u as b,F,t as S}from"./Form-DPdhl0qo.js";import{s as O}from"./Action-B4jn1mWw.js";import"./PropsContextProvider-DLHfSyo1.js";import"./mergeRefs-BkScJl_E.js";import"./index-SeEX-dzh.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DCBGN5KI.js";import"./useStatic-CzYWXmZ1.js";import"./IconWarning-YJtY_uKm.js";import"./Text-CMgn7hJq.js";import"./browser-C659BIXC.js";import"./EmulatedBoldText-CYlQsTFY.js";import"./Text-xUaxq5aV.js";import"./utils-C85tsJLi.js";import"./LoadingSpinner-B0jtDNpX.js";import"./useLocalizedStringFormatter-uQUw7qmu.js";import"./context-D03EQw3p.js";import"./Button-Cis11iQd.js";import"./ProgressBar-CQMCSPa7.js";import"./Label-BfVvFZj4.js";import"./Hidden-B3217TUg.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BFN45BzM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-8K4_ozuW.js";import"./useFocus-DLNoddQ5.js";import"./useFocusRing-Bu3hVrpu.js";import"./useFocusable-DPi5-Rks.js";import"./ContextMenuSection-BwsDvC0k.js";import"./Dialog-DRA529j2.js";import"./RSPContexts-dpque2BF.js";import"./OverlayArrow-DAtBTKTJ.js";import"./useControlledState-BeXkP8kb.js";import"./Collection-CSylHNqr.js";import"./CollectionBuilder-Dt6aii9k.js";import"./Separator-C90j9JiE.js";import"./Group-D_IbuD73.js";import"./SearchField-C86J2fE8.js";import"./FieldError-CNai_82t.js";import"./Form-B2b0RBd7.js";import"./useTextField-l00Z-hVA.js";import"./useFormReset-BM4kigyU.js";import"./TextField-IalWcoDx.js";import"./useEvent-CJyM_iko.js";import"./SelectionManager-BrCB2ldz.js";import"./useCollator-Bl41TtO8.js";import"./FocusScope-Cg_D6BEH.js";import"./VisuallyHidden-DTvv8wPC.js";import"./TextFieldBase-CHzeNbCE.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-JfKFDbH2.js";import"./FieldDescription-6iurUfiv.js";import"./ReactAriaControlledValueFix-C6r6_Iq3.js";import"./context-CNefDW5h.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
