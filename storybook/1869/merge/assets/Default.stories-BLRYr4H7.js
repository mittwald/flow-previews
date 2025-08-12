import{j as r}from"./iframe-qMbEE3nZ.js";import{N as o}from"./NumberField-2A4AUjXp.js";import{L as t}from"./Label-Qwuh2gM1.js";import{F as _}from"./FieldDescription-UFnh7aPi.js";import{F as B}from"./FieldError-BKpgIzk8.js";import{C as I,a as U}from"./ContextualHelpTrigger-Dfu5rMf5.js";import{B as v}from"./Button-B092bVJN.js";import{T as K}from"./Text-BBRqDbdK.js";import"./FormField.module-B9AzUSUD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-GFGOiqrH.js";import"./mergeRefs-BuWec918.js";import"./index-HDYuzCzu.js";import"./IconWarning-CQwCi0eF.js";import"./ReactAriaControlledValueFix-DMQ5BcR6.js";import"./utils-BD_t44OF.js";import"./Button-Bonbvv9K.js";import"./ProgressBar-CF9ToJta.js";import"./Label-D0MPEMQA.js";import"./Hidden-D7F7fo4_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cq2dGHOX.js";import"./context-DPxByHJI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-7HicN3cp.js";import"./useFocus-DS8qI1YX.js";import"./useFocusRing-lD94xzjb.js";import"./useFocusable-D_wGn8G3.js";import"./FieldError-BHMg81Vw.js";import"./Text-cBZJFSe0.js";import"./Form-3qXBak_6.js";import"./Group-CL0zaHSQ.js";import"./useControlledState-CNYZu0wD.js";import"./useSpinButton-DY5RmE4M.js";import"./useLocalizedStringFormatter-D-75WDAr.js";import"./useFormReset-D9SBe6RC.js";import"./useEvent-CCJQzPdu.js";import"./useTextField-CGiD1Ab0.js";import"./Popover-DMdY6O5S.js";import"./DialogTriggerView-uudYIBUg.js";import"./context-DL-Maxx4.js";import"./useStatic-DJ16hY-2.js";import"./Dialog-BnaF-Tc6.js";import"./RSPContexts-CqdzRs7m.js";import"./OverlayArrow-UgIBIUFh.js";import"./Collection-BoGlwmNV.js";import"./CollectionBuilder--Vm7JqBi.js";import"./Separator-i61FpY_s.js";import"./SearchField-BlvkDSgb.js";import"./TextField-Dz9bsQp0.js";import"./SelectionManager-CTJHExhr.js";import"./useCollator-DOCzDbFi.js";import"./FocusScope-phx_Kgk6.js";import"./VisuallyHidden-BVlRlsah.js";import"./LoadingSpinner-YXQaSanI.js";import"./browser-CDpjXLqz.js";import"./EmulatedBoldText-DSEgcFLX.js";const{action:M}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:M("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isRequired:!0}},n={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(_,{children:"Enter your age"})]})},p={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},m={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(B,{children:"Age is required"})]})},l={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},d={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(I,{children:[r.jsx(v,{ariaSlot:null}),r.jsx(U,{children:r.jsx(K,{children:"Enter your age"})})]})]})})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var x,b,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var F,j,f;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var D,N,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...(S=(N=n.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var V,C,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var A,E,W;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...(W=(E=m.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var T,q,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...(y=(q=l.parameters)==null?void 0:q.docs)==null?void 0:y.source}}};var H,O,R;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const Jr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as Required,d as WithContextualHelp,p as WithDefaultValue,n as WithFieldDescription,m as WithFieldError,l as WithUnit,Jr as __namedExportsOrder,Gr as default};
