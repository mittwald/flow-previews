import{j as t}from"./iframe-CqjcYzEy.js";import{u as h,F as f,t as b,a as O}from"./Form-B9tr9_nz.js";import{B as m}from"./Button-_n3f2tJI.js";import{S as y}from"./Section-JW2VQrnX.js";import{A}from"./ActionGroup-D6A6si9S.js";import{s as j}from"./Action-BV8ECr9I.js";import{A as p}from"./Autocomplete-biIER6Sk.js";import{L as F}from"./Label-To7Hive9.js";import{T as B}from"./TextField-gPjZRy5f.js";import{O as n}from"./Option-BOrFCKWo.js";import{S as v}from"./SearchField-OnfoCJCv.js";import"./index-Cun1SEai.js";import"./dynamic-B6VmRDv6.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./clsx-B-dksMZM.js";import"./index-0TrhkGFb.js";import"./FieldError-BSbVK43F.js";import"./IconWarning-D54OF1fr.js";import"./FieldError-CvNEPKy0.js";import"./utils-CEH4bJOc.js";import"./Text-DBGfsT13.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./context-CVWMzqu0.js";import"./browser-BlhuXvad.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-C88kvj5Y.js";import"./EmulatedBoldText-CpIdef6b.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./ContextMenuSection-CogvxgrL.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./useStatic-B0fjiaVy.js";import"./context-BZQvEHSq.js";import"./useOverlayController-CtOPQD7l.js";import"./ReactAriaControlledValueFix-ywrWc9Ds.js";import"./useFilter-DuhM4N_j.js";import"./TextFieldBase-5hRWqTvc.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-DOrquxD2.js";import"./TextField-wTNEAGIG.js";import"./Form-DnnLWbpp.js";import"./Group-gwwAZomc.js";import"./Input-D3RtfHLP.js";import"./useTextField-BgB0WV5Q.js";import"./useFormReset-BSVvJl_b.js";import"./useFormValidation-Jq_wsvSc.js";import"./Popover-C0Icy7BB.js";import"./OverlayContextProvider-BmYGwoWC.js";import"./ClearPropsContextView-BEsUC-dX.js";import"./DragAndDrop-UmQbba-v.js";import"./inertValue-C95b94mB.js";import"./useListState-D8KEGcL7.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
