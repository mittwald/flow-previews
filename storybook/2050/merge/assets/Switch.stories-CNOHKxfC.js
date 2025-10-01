import{j as r}from"./iframe-DRU2mvvl.js";import{a as u,u as l,F as d,t as j}from"./Form-DXkXYe5Y.js";import{L as h}from"./Label-BMa7ap8T.js";import{B as m}from"./Button-B0nESNPa.js";import{S as g}from"./Section-BqGqHoUM.js";import{A as y}from"./ActionGroup-D1ho32W2.js";import{s as f}from"./Action-DTfm05Ga.js";import{S as x}from"./Switch-ZrdfN8bX.js";import"./index-Cun1SEai.js";import"./dynamic-BlISIwZy.js";import"./flowComponent-Dq3P4cwb.js";import"./index-CoBbVvoA.js";import"./clsx-B-dksMZM.js";import"./index-BV-9eFwZ.js";import"./FieldError-DvrKLXyD.js";import"./IconWarning-Ns7aLDcg.js";import"./FieldError-C8YHk-IR.js";import"./utils-CFpcVBbf.js";import"./Text-Qj1KdidL.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-xAOMWzO_.js";import"./context-WCWlHgyn.js";import"./browser-DycDZ9Cy.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-DZZppM_K.js";import"./Hidden-CuastpsR.js";import"./Text-CEDtxg_Y.js";import"./EmulatedBoldText-B-n-Sp9M.js";import"./LoadingSpinner-Bxg5W_a4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DFs_j9qJ.js";import"./ProgressBar-CO2F47bQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BqWNUUeu.js";import"./useFocus-WX08leiR.js";import"./useFocusRing-Dvcn05WP.js";import"./useFocusable-Bm6appxO.js";import"./ContextMenuSection-S05W1Jlf.js";import"./Dialog-2Ji50Dgm.js";import"./RSPContexts-uOHI89tH.js";import"./OverlayArrow-BamfX0ZV.js";import"./useControlledState-B4CekZuY.js";import"./Collection-sMc3txMy.js";import"./CollectionBuilder-Dd2Gplrf.js";import"./context-ZJx-WxTz.js";import"./Separator-D99CVDQv.js";import"./SelectionManager-BnRrB_cT.js";import"./useEvent-2v3ak77A.js";import"./useCollator-pfKZSWNa.js";import"./FocusScope-XgH7ylXa.js";import"./VisuallyHidden-D2z1OxrB.js";import"./getActionGroupSlot-DvwtoTC6.js";import"./useStatic-ZRFoobPh.js";import"./context-BmZA5kUX.js";import"./useMakeFocusable-BXp11O4i.js";import"./useToggleState-DJNV6eOo.js";import"./useFormReset-BYiU13z5.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <Switch>
            <Label>Text</Label>
          </Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const Lr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};
