import{j as e}from"./iframe-r9Fl_3r-.js";import{A as j}from"./ActionGroup-BVdVFLL0.js";import{B as p}from"./Button-D0ktHzCI.js";import{L as o}from"./Label-DgY637fA.js";import{S as f}from"./Section-DruVn11o.js";import{T as n}from"./TextField-XPr4vaIj.js";import{a as N,u as b,F,t as S}from"./Form-DruQpksO.js";import{s as O}from"./Action-B5PNSonE.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DpUiS5SY.js";import"./useStatic-Dwli2ElM.js";import"./IconWarning-BUxpotmw.js";import"./Text-DD-b1p2M.js";import"./browser-tiRbxzJD.js";import"./EmulatedBoldText-CDsZBMJH.js";import"./Text-DHfFA3io.js";import"./utils-DXh-iENK.js";import"./LoadingSpinner-zCjOjpaf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./context-B1eqcBF6.js";import"./Button-4Qe77JoQ.js";import"./ProgressBar-BsRRuR7U.js";import"./Label-C3TZzzex.js";import"./Hidden-BJHVOqWC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DoVt-K4x.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CjAT5thu.js";import"./useFocus-DRS9ufOF.js";import"./useFocusRing-C_G4oYuI.js";import"./useFocusable-DI-LrkzR.js";import"./ContextMenuSection-C8XhetIA.js";import"./Dialog-CqKbtFhs.js";import"./RSPContexts-Bz7sSPBE.js";import"./OverlayArrow-HXzjk5ZA.js";import"./useControlledState-Bxg_NaN0.js";import"./Collection-DOWMAROO.js";import"./CollectionBuilder-CqQF4tYs.js";import"./Separator-Z9TJ6XEa.js";import"./Group-BdAgZaYl.js";import"./SearchField-DOWcWepW.js";import"./FieldError-D3xuSMMg.js";import"./Form-D9IRbY4n.js";import"./useTextField-Bg6cyBen.js";import"./useFormReset-DxbIlA0W.js";import"./TextField-BiW4cyB4.js";import"./useEvent-Dowxq_UB.js";import"./SelectionManager-BmeUKben.js";import"./useCollator-B2W9GfqU.js";import"./FocusScope-C8ZyuACd.js";import"./VisuallyHidden-CHwjrWyl.js";import"./TextFieldBase-C7xVUfeJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B_shqPON.js";import"./FieldDescription-DoaPcd7E.js";import"./ReactAriaControlledValueFix-qzhLZtrn.js";import"./context-D7mbIFkz.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
