import{j as r}from"./iframe-ChXgWPPC.js";import{N as t,x as c,F as g,C as x,c as b}from"./Modal-CZyndeHi.js";import{L as o}from"./Label-BPAVwVMs.js";import{B as h}from"./Button-DdSGnULn.js";import{T as F}from"./Text-B34O2ICL.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-nfc0SAk9.js";import"./flowComponent-DLnOhNG7.js";import"./index-BEhDMpqQ.js";import"./index-CUhsAGa6.js";import"./context-7RM43Tkb.js";import"./Button-DACNP5IV.js";import"./utils-DiB9MypO.js";import"./ProgressBar-Cav1e1WF.js";import"./Hidden-DouN_7bs.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-29WSV5fn.js";import"./useFocusRing-CVyMmbQQ.js";import"./useFocusable-CRhE58ZF.js";import"./RSPContexts-T2aOxEw5.js";import"./Collection-TEOU7cw3.js";import"./CollectionBuilder-CTYVMSyP.js";import"./SelectionIndicator-C4aBFtUw.js";import"./Separator-Dg3iBkBi.js";import"./browser-DjrPe_WT.js";import"./useLocalizedStringFormatter-6uEz2p-j.js";import"./useStatic-DmmsCa0X.js";import"./FileCardList-C4eHcIg8.js";import"./IconWarning-BNdWvzeJ.js";import"./Avatar-ghljliNz.js";import"./AlertIcon-DTTgmXrL.js";import"./Image-DALWDs5z.js";import"./Link-B12snMlw.js";import"./ControlledNotification-vSaFkeEz.js";import"./LoadingSpinner-K2z7KZMw.js";import"./Flex-BwGFoWCl.js";import"./Accordion-BSAUPkyO.js";import"./Section-EbTwCLIg.js";import"./ActionGroup-BMrZFOui.js";import"./Alert-BVyhkX9T.js";import"./AlertBadge-B7nfqq50.js";import"./Align-CLYk2yCP.js";import"./AvatarStack-36KK9ktO.js";import"./BigNumber-CFSbrkgt.js";import"./Breadcrumb-cvLbQ11O.js";import"./Heading-DMHDZ_u6.js";import"./Legend-DYla4PjT.js";import"./Color-BIUpZZos.js";import"./TableFooterRow-Dnf9rhvN.js";import"./SkeletonText-9oOatj3m.js";import"./Content-BASnjacW.js";import"./CounterBadge-BfruJEd0.js";import"./DonutChart-CVlfJdd5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Clt45Y1H.js";import"./Header-Dthqz58G.js";import"./Initials-BRgog33-.js";import"./InlineCode-D5O-E-M9.js";import"./LayoutCard-CyxN8E7I.js";import"./Separator-DHHhirb8.js";import"./MessageSeparator-DBolDfwP.js";import"./NavigationGroup-BwXeVraB.js";import"./Notification-BADXrVSo.js";import"./NotificationProvider-v-2Uz-uV.js";import"./ProgressBar-BUhrPkyu.js";import"./Rating-Bz_0i4Bq.js";import"./Skeleton-DepZBCMx.js";import"./EmulatedBoldText-BEs_gMjx.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const _r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,_r as __namedExportsOrder,Hr as default};
