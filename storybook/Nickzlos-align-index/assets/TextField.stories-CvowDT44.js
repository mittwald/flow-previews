import{j as e}from"./iframe-B5D6Jy2e.js";import{A as j}from"./ActionGroup-CNyyAHOL.js";import{B as p}from"./Button-D_cucc2Q.js";import{L as o}from"./Label-C5afoFui.js";import{S as f}from"./Section-D-49RRcv.js";import{T as m}from"./TextField-jEoF0Xqi.js";import{a as N,u as b,F,t as S}from"./Form-BBA-3fEK.js";import{s as O}from"./Action-BDQA-SJt.js";import"./PropsContextProvider-CnEOAU2e.js";import"./mergeRefs-C6bCzzs4.js";import"./index-98juzA4z.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-ul0ry97b.js";import"./useStatic-DN3utWlK.js";import"./IconWarning-DjYRPplk.js";import"./Text-Fuh2Ogih.js";import"./browser-C-lA9C9Q.js";import"./EmulatedBoldText-bgj99tWG.js";import"./Text-Bv7a287p.js";import"./utils-Bs8Wqn-q.js";import"./LoadingSpinner-Bd5Mqs7Q.js";import"./useLocalizedStringFormatter-BQI7yYKW.js";import"./context-Bj-w4NoV.js";import"./Button-BIn7btPV.js";import"./ProgressBar-B93iLJrK.js";import"./Label-36rBC0g7.js";import"./Hidden-C8fkQIAB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DkjeIhDx.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CBvAjfyN.js";import"./useFocus-CkjZAdJ6.js";import"./useFocusRing-SK3yyEZg.js";import"./useFocusable-D_QF0Scb.js";import"./ContextMenuSection-kqh9ATtY.js";import"./Dialog-CYkZaeYk.js";import"./RSPContexts-v362EzbA.js";import"./OverlayArrow-m6vw9un5.js";import"./useControlledState-Yj7M3RjN.js";import"./Collection-Cl2OOjED.js";import"./CollectionBuilder-DuYXSFPS.js";import"./Separator-DAvj9ZN-.js";import"./Input-ryFqDY2c.js";import"./SearchField-Bsl1v9iA.js";import"./FieldError-DXJUVvju.js";import"./Form-DGtlbNAt.js";import"./Group-ClvX5TRg.js";import"./useTextField-4CgH3C31.js";import"./useFormReset-CFSg60RK.js";import"./TextField-PNGd04kr.js";import"./SelectionManager-Yyuo4m1t.js";import"./useEvent-DdUUCx0h.js";import"./useCollator-BXMjrBT_.js";import"./FocusScope-BljfDlo2.js";import"./VisuallyHidden-1pt6eLog.js";import"./TextFieldBase-CiizWigD.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BGY0RJ8v.js";import"./FieldDescription--sEKc3Pw.js";import"./ReactAriaControlledValueFix-C2FZayrm.js";import"./context-IJ_Eymmu.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};
