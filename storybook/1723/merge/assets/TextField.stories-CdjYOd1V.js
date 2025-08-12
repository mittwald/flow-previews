import{j as e}from"./iframe-BpEavT04.js";import{A as l}from"./ActionGroup-oawpU2v7.js";import{B as p}from"./Button-CCZgVc0N.js";import{L as o}from"./Label-CiJybHgW.js";import{S as c}from"./Section-Cen1jqO9.js";import{T as m}from"./TextField-CXYiBKHe.js";import{a as j,u as d,F as u,t as h}from"./Form-CXoJvbIg.js";import{s as f}from"./Action-h-c20zp_.js";import"./index-k6QiPQ3a.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B7TFfcap.js";import"./useStatic-BZhl3rWC.js";import"./IconWarning-vA6HsYJq.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./Text-DWLjOUr2.js";import"./utils-CpHgE-S6.js";import"./LoadingSpinner-CRDc6voB.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6-vYiz3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocus-BaJLfW1J.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./ContextMenuSection-CNQcPdTQ.js";import"./Dialog-DAXkTNx8.js";import"./RSPContexts-z3euxKCR.js";import"./OverlayArrow-CMORky_-.js";import"./useControlledState-Cjeeyz03.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./Group-DG2VW6yX.js";import"./SearchField-DiZ_IivY.js";import"./FieldError-BmEWAGf_.js";import"./Form-DJ2svD4f.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./TextField-CoVUwaSO.js";import"./useEvent--O7DxxGG.js";import"./SelectionManager-BpD0kl0T.js";import"./useCollator-bTe8AndB.js";import"./FocusScope-CJ6Nm8ct.js";import"./VisuallyHidden-DD5pbayJ.js";import"./TextFieldBase-rHnY8ewp.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DY8OUBEl.js";import"./FieldDescription-Vq0coIIu.js";import"./ReactAriaControlledValueFix-BKN3vDTM.js";import"./context-DfZyAinb.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,x=b("submit"),Le={title:"Integrations/React Hook Form/TextField",component:j,render:()=>{const s=async n=>{await f(1500),x(n)},t=d({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=h();return e.jsx(u,{form:t,onSubmit:s,children:e.jsxs(c,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(l,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{x(n)},t=d({defaultValues:{name:""}}),r=h();return e.jsx(u,{form:t,onSubmit:s,children:e.jsxs(c,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(l,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const _e=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,_e as __namedExportsOrder,Le as default};
