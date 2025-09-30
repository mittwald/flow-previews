import{j as r,r as S}from"./iframe-lUo2nGnz.js";import{a as j,u as f,F as O,t as y}from"./Form-DCV6t3hU.js";import{L as i}from"./Label-JtAW2uUp.js";import{B as o}from"./Button-BJSwvuxb.js";import{S as T}from"./Section-BmAZdHSz.js";import{A as P}from"./ActionGroup-DNEOJX-0.js";import{s as g}from"./Action-CDVhK15_.js";import{S as m}from"./Select-DLJowEiT.js";import{O as t}from"./Option-53yXGv-X.js";import{C as b,a as v}from"./ContextualHelpTrigger-YCFhHj29.js";import{d as B}from"./dummyText-CX_I_Wpl.js";import{T as A}from"./Text-BGPM5sar.js";import"./index-Cun1SEai.js";import"./dynamic-C5kU0I4Y.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./clsx-B-dksMZM.js";import"./FieldError-DpFF5VSh.js";import"./IconWarning-BtoswtWr.js";import"./FieldError-pxjDXQ2F.js";import"./utils-D2KvaKmW.js";import"./Text-C5QP4r7D.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./context-FIeePqeN.js";import"./browser-BBsn6OTc.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D-InGAKb.js";import"./ProgressBar-3LATX2wa.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Iu709INZ.js";import"./useFocus-C7dEKa6p.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./ContextMenuSection-CdG250Rt.js";import"./Popover-DptWEuw1.js";import"./DialogTriggerView-7b0oIJZS.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useControlledState-DwS5X_XZ.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";import"./Switch-CAz7sbnA.js";import"./useMakeFocusable-DZi0m29n.js";import"./useToggleState-w03Qksro.js";import"./useFormReset-D9xEl0IY.js";import"./getActionGroupSlot-CI7hC4XP.js";import"./FormField.module-CqWyJNQI.js";import"./Form-CNo_OXXk.js";import"./intlStrings-ZMTSFH_M.js";import"./useFormValidation-DhAPE9Wk.js";import"./useSingleSelectListState-DHxe0nzP.js";import"./useListState-yXV90fU7.js";import"./DragAndDrop-DkkkOyuS.js";import"./inertValue-DVkEiUcS.js";import"./EmulatedBoldText-DD5sDuaA.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,E=C("submit"),Nr={title:"Integrations/React Hook Form/Select",component:j,render:()=>{const p=async F=>{await g(1500),E(F)},e=f({defaultValues:{app:"",appDefaultValue:"wordpress",appRequired:""}}),a=y();return r.jsx(O,{form:e,onSubmit:p,children:r.jsxs(T,{children:[r.jsx(a,{name:"app",children:r.jsxs(m,{children:[r.jsx(i,{children:"App"}),r.jsx(t,{value:"wordpress",children:"WordPress"}),r.jsx(t,{value:"typo3",children:"TYPO3"}),r.jsx(t,{value:"magento",children:"Magento"})]})}),r.jsx(a,{name:"appDefaultValue",children:r.jsxs(m,{children:[r.jsx(i,{children:"App"}),r.jsx(t,{value:"wordpress",children:"WordPress"}),r.jsx(t,{value:"typo3",children:"TYPO3"}),r.jsx(t,{value:"magento",children:"Magento"})]})}),r.jsx(a,{name:"appRequired",rules:{required:"Please select an app"},children:r.jsxs(m,{children:[r.jsx(i,{children:"App"}),r.jsx(t,{value:"wordpress",children:"WordPress"}),r.jsx(t,{value:"typo3",children:"TYPO3"}),r.jsx(t,{value:"magento",children:"Magento"})]})}),r.jsxs(P,{children:[r.jsx(o,{variant:"soft",color:"secondary",onPress:()=>{e.reset()},children:"Reset"}),r.jsx(o,{type:"submit",children:"Submit"})]})]})})}},n={},s={render:()=>{const p=S.useRef(null),e=f();return r.jsxs(O,{form:e,onSubmit:async()=>await g(2e3),children:[r.jsx(j,{name:"text",rules:{required:!0},children:r.jsxs(m,{ref:p,children:[r.jsxs(i,{children:["App",r.jsxs(b,{children:[r.jsx(o,{}),r.jsx(v,{children:r.jsx(A,{children:B.short})})]})]}),r.jsx(t,{children:"WordPress"}),r.jsx(t,{children:"TYPO3"}),r.jsx(t,{children:"Contao"}),r.jsx(t,{children:"Drupal"}),r.jsx(t,{children:"Joomla!"}),r.jsx(t,{children:"Matomo"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(o,{onPress:()=>e.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(o,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(o,{type:"submit",children:"Submit"})]})}};var l,u,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,x,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const element = useRef<HTMLDivElement>(null);
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Select ref={element}>
            <Label>
              App
              <ContextualHelpTrigger>
                <Button />
                <ContextualHelp>
                  <Text>{dummyText.short}</Text>
                </ContextualHelp>
              </ContextualHelpTrigger>
            </Label>
            <Option>WordPress</Option>
            <Option>TYPO3</Option>
            <Option>Contao</Option>
            <Option>Drupal</Option>
            <Option>Joomla!</Option>
            <Option>Matomo</Option>
          </Select>
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
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const Ur=["Default","WithFocusAndError"];export{n as Default,s as WithFocusAndError,Ur as __namedExportsOrder,Nr as default};
