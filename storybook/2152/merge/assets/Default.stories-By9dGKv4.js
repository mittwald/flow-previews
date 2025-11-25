import{j as r}from"./iframe-CgbY7LhW.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-B_M4h9wv.js";import{L as m}from"./Link-CnlhKMXm.js";import{aa as s,ab as h,M as j,g as f,h as p}from"./Modal-BfYIexr4.js";import{B as o}from"./Button-SVEMHQlh.js";import{T as c}from"./Text-DYTEpYR_.js";import{I as M}from"./Image-DDNMfo4c.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-WA_Rs_vA.js";import{e as b}from"./FileCardList-C6bH-qYK.js";import"./Section-vgTzgtmS.js";import{H as k}from"./Heading-B5jO-5Wf.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CIzRpviz.js";import"./index-DzXy7NVI.js";import"./index-BGPntLpu.js";import"./useLocalizedStringFormatter-n70-9iPv.js";import"./context-CFrKoiSq.js";import"./utils-CrtKH5yx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BLRAUViD.js";import"./useFocusable-CK20RdZz.js";import"./dynamic-BL-wVa7i.js";import"./context-BZ4nmd66.js";import"./Button-B3Gd0dhU.js";import"./ProgressBar-DkKo9kM8.js";import"./Hidden-C39TrB4S.js";import"./RSPContexts-a1gWmxyS.js";import"./Collection-AJHavNni.js";import"./CollectionBuilder-vSLB7roW.js";import"./SelectionIndicator-DAnIk2iR.js";import"./Separator-Dbfv1-4R.js";import"./browser-B9s1Wzc0.js";import"./useStatic-DAnqOhq-.js";import"./LoadingSpinner-D5GUeRWw.js";import"./Flex-CENJLpDN.js";import"./Accordion-z-ohBE1U.js";import"./ActionGroup-CmB_jI0r.js";import"./Alert-B_kIhVrI.js";import"./AlertIcon-DNdzJj2o.js";import"./AlertBadge-DNjrKNd8.js";import"./Align-CtVPE4QN.js";import"./AvatarStack-BlJN3mG4.js";import"./BigNumber-CoK4x3f1.js";import"./Breadcrumb-CzsKgwxv.js";import"./Legend-ChYFXknj.js";import"./Color-DuOfyeUm.js";import"./TableFooterRow-DAgU7sHY.js";import"./SkeletonText-CnZTtgwR.js";import"./Content-CEEnoGhP.js";import"./Label-VGhN0jRZ.js";import"./CounterBadge-BedfIzch.js";import"./DonutChart-BPWlwlOc.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C8u-hiHg.js";import"./Header-CShmbRTO.js";import"./Initials-YnzuiPfJ.js";import"./InlineCode-CW1svUV-.js";import"./LayoutCard-vyJIg7vB.js";import"./Separator-DWsNhIeQ.js";import"./MessageSeparator-DR2YivYW.js";import"./NavigationGroup-DcTqlZP5.js";import"./Notification-SBEJzfTe.js";import"./NotificationProvider-DzYeqYbn.js";import"./ControlledNotification-DRgvriDq.js";import"./ProgressBar-BVXsq-Dv.js";import"./Rating-DW5q1Ced.js";import"./Skeleton-DRKewfj9.js";import"./EmulatedBoldText-B0grik2o.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Rr as default};
