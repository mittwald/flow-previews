import{j as t}from"./iframe-Co5olYEg.js";import{u as h,F as f,t as b,a as O}from"./Form-KJ02LKVv.js";import{B as m}from"./Button-W4WIo1el.js";import{S as y}from"./Section-DKEvIbkh.js";import{A}from"./ActionGroup-ByB8rRUO.js";import{s as j}from"./Action-Cid4LteC.js";import{A as p}from"./Autocomplete-DXy1RsKx.js";import{L as F}from"./Label-BiorYBBr.js";import{T as B}from"./TextField-ChCll267.js";import{O as n}from"./Option-C4vswWz1.js";import{S as v}from"./SearchField-BSssTq7h.js";import"./index-Cun1SEai.js";import"./dynamic-DrcT1vJi.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./clsx-B-dksMZM.js";import"./FieldError-ozznJ0Nd.js";import"./IconWarning-Deg5RPPa.js";import"./FieldError-Clh4ku1F.js";import"./utils-CfsHCmXQ.js";import"./Text-DL7aZegp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./context-VmB2ki6S.js";import"./browser-Lvchr8XH.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-D64yDBkh.js";import"./EmulatedBoldText-m8x9dOVA.js";import"./LoadingSpinner-CRLYV60Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B1uEfXYj.js";import"./ProgressBar-CLW14R0J.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BWYiyAlu.js";import"./useFocus-D_PcVBPO.js";import"./useFocusRing-CNR6shO8.js";import"./useFocusable-CeUOSLWr.js";import"./ContextMenuSection-BCeGxmuy.js";import"./Popover-PLO4F2vM.js";import"./DialogTriggerView-CesmwlI4.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./RSPContexts-DTaEDLKz.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./useControlledState-BLXlsrOK.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";import"./Switch-Djj9tj67.js";import"./useMakeFocusable-DB3B4rem.js";import"./useToggleState-4TXdrtqZ.js";import"./useFormReset-CgjW6y2V.js";import"./getActionGroupSlot-BPrq4YXq.js";import"./ReactAriaControlledValueFix-DZySu1uE.js";import"./useFilter-CaP0y9B7.js";import"./TextFieldBase-CpWSYvvy.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BesRHQ6n.js";import"./TextField-CWDJYZYb.js";import"./Form-XAAYfRmY.js";import"./Group-BEO1bpjW.js";import"./Input-B4YaMKko.js";import"./useTextField-kPi4VDlP.js";import"./useFormValidation-CpjqECXn.js";import"./DragAndDrop-CAW7alZA.js";import"./inertValue-DZi2XVvs.js";import"./useListState-BK3gzSFg.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
