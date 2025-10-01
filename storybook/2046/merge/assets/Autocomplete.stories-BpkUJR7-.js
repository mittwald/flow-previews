import{j as t}from"./iframe-8Gn-cQAI.js";import{u as h,F as f,t as b,a as O}from"./Form-Drx3o-9i.js";import{B as m}from"./Button-BYLyJZ8T.js";import{S as y}from"./Section-D-_npJws.js";import{A}from"./ActionGroup-DeqHAwBL.js";import{s as j}from"./Action-HGXjP-6z.js";import{A as p}from"./Autocomplete-BzokQ3bz.js";import{L as F}from"./Label-BKQD2yp-.js";import{T as B}from"./TextField-o7J37_AQ.js";import{O as n}from"./Option-Bh0BgfjA.js";import{S as v}from"./SearchField-CkjuPY3o.js";import"./index-Cun1SEai.js";import"./dynamic-rXbOiSCg.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./clsx-B-dksMZM.js";import"./index-UEc6MpK_.js";import"./FieldError-C-zSllwf.js";import"./IconWarning-D4orWaCC.js";import"./FieldError-BP_wpITZ.js";import"./utils-GVjct8zS.js";import"./Text-YtT3E9ZO.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./browser-BcQIid3c.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-CaltWpnJ.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";import"./ContextMenuSection-BSmzwpDI.js";import"./Dialog-DaZvxqJC.js";import"./RSPContexts-BLLLZDxH.js";import"./OverlayArrow-t8YkI2AY.js";import"./useControlledState-CowCOuKH.js";import"./Collection-DWEguDCp.js";import"./CollectionBuilder-9Z-fAvba.js";import"./context-OwOTZ-QT.js";import"./Separator-Dm-csSJW.js";import"./SelectionManager-CsYJeMyB.js";import"./useEvent-CbQE1MrG.js";import"./useCollator-DlUVcb0E.js";import"./FocusScope-CFCh8ZEd.js";import"./VisuallyHidden-hAbnP3vK.js";import"./getActionGroupSlot-DshV_Wd3.js";import"./useStatic-D4LCMNvH.js";import"./context-BIaltrhp.js";import"./useOverlayController-byix1ALu.js";import"./ReactAriaControlledValueFix-CTvHT95w.js";import"./useFilter-CGuGTLWm.js";import"./TextFieldBase-C6vWj34E.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BfSaLbIT.js";import"./TextField-CGZRqELK.js";import"./Form-uqEItuxM.js";import"./Group-D6MDioP3.js";import"./Input-D8m2LMBm.js";import"./useTextField-CZZzsHWG.js";import"./useFormReset-EWszKDPA.js";import"./useFormValidation-CDT2yp15.js";import"./Popover-DmA7Dyye.js";import"./OverlayContextProvider-fTDl6RtS.js";import"./ClearPropsContextView-CnCgZIgn.js";import"./DragAndDrop-DQl6x3_c.js";import"./inertValue-DkeNinP3.js";import"./useListState-CNx2OS_m.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
