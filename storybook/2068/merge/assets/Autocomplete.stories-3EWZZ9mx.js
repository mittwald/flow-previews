import{j as t}from"./iframe-BsWE3_7o.js";import{u as h,F as f,t as b,a as O}from"./Form-CmXyG-QV.js";import{B as m}from"./Button-B8k4PzHL.js";import{S as y}from"./Section-BBfFuT6N.js";import{A}from"./ActionGroup-B8fCt23K.js";import{s as j}from"./Action-BuGRjvOM.js";import{A as p}from"./Autocomplete-D9kxX2tE.js";import{L as F}from"./Label-D6AcunKl.js";import{T as B}from"./TextField-DGC_M6lk.js";import{O as n}from"./Option-BsGU_ADr.js";import{S as v}from"./SearchField-DFuthhYb.js";import"./index-Cun1SEai.js";import"./dynamic-CuzBn_WV.js";import"./flowComponent-Cm7zYSgo.js";import"./index-Bx4whYyJ.js";import"./clsx-B-dksMZM.js";import"./index-Dl-28hpS.js";import"./FieldError-Dyno9e6-.js";import"./IconWarning-DP87PzzZ.js";import"./FieldError-B9NI0uR6.js";import"./utils-CDS5H-7_.js";import"./Text-TQ7kewRG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Cam9elWn.js";import"./context-JgUU7ob0.js";import"./browser-LwAPTQ-2.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-BX8imB2t.js";import"./EmulatedBoldText-BTQlJ2rY.js";import"./LoadingSpinner-BHbUYlFD.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dk5kDV0G.js";import"./ProgressBar-B-b_Vg6x.js";import"./Label-CRuRdSc0.js";import"./Hidden-BJN4u45n.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAk4CpA9.js";import"./useFocus-D0VElTMN.js";import"./useFocusRing-VBFwaSrL.js";import"./useFocusable-CddXNiQZ.js";import"./ContextMenuSection-B-erxgIm.js";import"./Dialog-BSaAMEbK.js";import"./RSPContexts-BZ8FUmDB.js";import"./OverlayArrow-IIw_dauQ.js";import"./useControlledState-ejVvWz-k.js";import"./Collection-DojlZZtj.js";import"./CollectionBuilder-B76ZLXz4.js";import"./context-lpkCHAFg.js";import"./Separator-Dpoi8-ef.js";import"./SelectionManager-01TNEB4e.js";import"./useEvent-iSMBndhq.js";import"./useCollator-Dfjx7kh0.js";import"./FocusScope-BU2EHzP0.js";import"./VisuallyHidden-CnzfSQ3j.js";import"./getActionGroupSlot-C6PA21cd.js";import"./useStatic-BvSdYqAU.js";import"./context-CUTz3ChQ.js";import"./useOverlayController-DetoWaxX.js";import"./ReactAriaControlledValueFix-DrCMnd7H.js";import"./useFilter-DQoFO-Jk.js";import"./TextFieldBase-DmFBNK9C.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BrfrkFA7.js";import"./TextField-BJDoddff.js";import"./Form-C2iHaD1W.js";import"./Group-B4E33LQv.js";import"./Input-ChLUKEAu.js";import"./useTextField-JbRoKTtn.js";import"./useFormReset-DgPn8KEa.js";import"./useFormValidation-5Qvk76gI.js";import"./Popover-BQlnJjXA.js";import"./OverlayContextProvider-xyA10wvE.js";import"./ClearPropsContextView-BWN31-oJ.js";import"./DragAndDrop-igLJom5f.js";import"./inertValue-CyU0LEMd.js";import"./useListState-BV8jcLiT.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Autocomplete>
            <SearchField>
              <Label>Test</Label>
            </SearchField>
            <Option value="example.com">example.com</Option>
            <Option value="domain.de">domain.de</Option>
            <Option value="test.org">test.org</Option>
          </Autocomplete>
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
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Zt=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Zt as __namedExportsOrder,Xt as default};
