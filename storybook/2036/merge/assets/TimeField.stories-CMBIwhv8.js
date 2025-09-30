import{j as r}from"./iframe-lUo2nGnz.js";import{a as h,u as x,F as f,t as S}from"./Form-DCV6t3hU.js";import{L as i}from"./Label-JtAW2uUp.js";import{B as m}from"./Button-BJSwvuxb.js";import{S as T}from"./Section-BmAZdHSz.js";import{A as g}from"./ActionGroup-DNEOJX-0.js";import{s as j}from"./Action-CDVhK15_.js";import{M as y}from"./DateField-BNoUO7-0.js";import{T as s}from"./TimeField-B7t5J_RY.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./Text-BGPM5sar.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./Form-CNo_OXXk.js";import"./Group-Cor_1PTD.js";import"./Input-Dtsuwq9P.js";import"./useFormValidation-DhAPE9Wk.js";import"./useSpinButton-Bx58WIl6.js";import"./useFilter-C1A5OWsL.js";import"./FormField.module-CqWyJNQI.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,_=B("submit"),Mr={title:"Integrations/React Hook Form/TimeField",component:h,render:()=>{const t=async b=>{await j(1500),_(b)},F=x({defaultValues:{timeDefaultValue:new y(16,0)}}),n=S();return r.jsx(f,{form:F,onSubmit:t,children:r.jsxs(T,{children:[r.jsx(n,{name:"time",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx(g,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},o={},e={render:()=>{const t=x();return r.jsxs(f,{form:t,onSubmit:async()=>await j(2e3),children:[r.jsx(h,{name:"text",children:r.jsx(s,{children:r.jsx(i,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>t.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>t.setFocus("text"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var p,a,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var u,d,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const Wr=["Default","WithFocusAndError"];export{o as Default,e as WithFocusAndError,Wr as __namedExportsOrder,Mr as default};
