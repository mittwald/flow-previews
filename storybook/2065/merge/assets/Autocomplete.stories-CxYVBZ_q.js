import{j as t}from"./iframe-DwZ8STeX.js";import{u as h,F as f,t as b,a as O}from"./Form-DB-9BDR2.js";import{B as m}from"./Button-DviFkjeq.js";import{S as y}from"./Section-ClBJebLo.js";import{A}from"./ActionGroup-CghJCTXs.js";import{s as j}from"./Action-bmScN_4O.js";import{A as p}from"./Autocomplete-Bj_iuS84.js";import{L as F}from"./Label-wZ6tq0z6.js";import{T as B}from"./TextField-BFQT-gv6.js";import{O as n}from"./Option-EfmvFEYD.js";import{S as v}from"./SearchField-3G47EVh7.js";import"./index-Cun1SEai.js";import"./dynamic-DhSxKtV5.js";import"./flowComponent-B5_7XuIt.js";import"./index-ULfo01cY.js";import"./clsx-B-dksMZM.js";import"./index-DRXVqLbm.js";import"./FieldError-DOIfsPUC.js";import"./IconWarning-dtP1FcGg.js";import"./FieldError-CX3z6nx3.js";import"./utils-7Pnsuj4A.js";import"./Text-BcrniBgV.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-B7gF29kp.js";import"./context-B00wSq60.js";import"./browser-DDdNHtRK.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-O3JAN1OQ.js";import"./EmulatedBoldText-Cn2ModP-.js";import"./LoadingSpinner-C4ZuAlrP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CkDO_RvR.js";import"./ProgressBar-CsC-_1Kt.js";import"./Label-DpGi0C14.js";import"./Hidden-CV41pM0d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-JMMpWwD2.js";import"./useFocus-BONLbswZ.js";import"./useFocusRing-Bg4FiEXG.js";import"./useFocusable-p3-NtQMC.js";import"./ContextMenuSection-ZF-vqHWD.js";import"./Dialog-2PCEZ6kq.js";import"./RSPContexts-CnTUB1D3.js";import"./OverlayArrow-BzoITITy.js";import"./useControlledState-Blay967p.js";import"./Collection-C8ZYuLoW.js";import"./CollectionBuilder-CkIB4w9D.js";import"./context-DapI3jdg.js";import"./Separator-D_cW8HVn.js";import"./SelectionManager-CYnwAR0E.js";import"./useEvent-wDKyQN9g.js";import"./useCollator-Cp0ZA5x6.js";import"./FocusScope-CIj22QkH.js";import"./VisuallyHidden-VLSV2bjz.js";import"./getActionGroupSlot-CSCOifJo.js";import"./useStatic-BQF2lsen.js";import"./context-DCjwncLb.js";import"./useOverlayController-D87w5C3N.js";import"./ReactAriaControlledValueFix-Vb6shxA3.js";import"./useFilter-DLBnNq4q.js";import"./TextFieldBase-BKC1AXzh.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BrHb9YgI.js";import"./TextField-BkjiHt80.js";import"./Form-ekHeB2q6.js";import"./Group-DYrYUI7b.js";import"./Input-DPWebHIT.js";import"./useTextField-D3KPmHQF.js";import"./useFormReset-DQpyIayp.js";import"./useFormValidation-DWWt7inC.js";import"./Popover-CfCMVMRC.js";import"./OverlayContextProvider-BQAK-WIK.js";import"./ClearPropsContextView-DSZLTZ0u.js";import"./DragAndDrop-BTt3IoYM.js";import"./inertValue-hfl3wWXn.js";import"./useListState-cvufeRvQ.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
