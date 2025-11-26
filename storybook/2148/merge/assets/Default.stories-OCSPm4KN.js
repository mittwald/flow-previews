import{j as r}from"./iframe-BbaYMYQ1.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-CkjtEKGs.js";import{L as m}from"./Link-rPNj3DYm.js";import{ab as s,ac as h,M as j,g as f,h as p}from"./Modal-DVvIdT0R.js";import{B as o}from"./Button-KIO5b-Hc.js";import{T as c}from"./Text-8_g1DnjB.js";import{I as M}from"./Image-CJ6kjDK0.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-CVLM7H3M.js";import{e as b}from"./FileCardList-BjZ9NUbt.js";import"./Section-Bklfm26f.js";import{H as k}from"./Heading-lbjZQMyr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C662J8_x.js";import"./index-BgowJb9k.js";import"./index-DF7s3pP8.js";import"./useLocalizedStringFormatter-CVO0oqQf.js";import"./context-DxIVJg5X.js";import"./utils-C-StNnVz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BzYkSJhL.js";import"./useFocusable-B3SCcOBQ.js";import"./dynamic-CvfiG9eK.js";import"./context-CTAVigQn.js";import"./Button-B8_E6hAa.js";import"./ProgressBar-Bb19OYa8.js";import"./Hidden-S-Rgpp-0.js";import"./RSPContexts-vimGF_ZT.js";import"./Collection-CCUE8FQE.js";import"./CollectionBuilder-3YuRca9q.js";import"./SelectionIndicator-BTGWwJK9.js";import"./Separator-xUWU1DOd.js";import"./browser-CF0_O6rk.js";import"./useStatic-CvDTMdvn.js";import"./LoadingSpinner-Cwm6VlGh.js";import"./Flex-pi8iCwQc.js";import"./Accordion-D8fzz0-b.js";import"./ActionGroup-QM-x3f8J.js";import"./Alert-5Lfb6dl8.js";import"./AlertIcon-CRnyQnM7.js";import"./AlertBadge-muxF3U8a.js";import"./Align-CHGtq9jk.js";import"./AvatarStack-j0GVx9dq.js";import"./BigNumber-B8_Z7Vks.js";import"./Breadcrumb-B6ecpmjh.js";import"./Legend-_0bhhOvJ.js";import"./Color-C-Cz2kw_.js";import"./TableFooterRow-r87NN87D.js";import"./SkeletonText-enZo4G0m.js";import"./Content-eRMHFgpO.js";import"./Label-BraeMjNZ.js";import"./CounterBadge-dtasO-Oy.js";import"./DonutChart-Gb7C9vCW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-dqDgvxC5.js";import"./Header-BvDja-IR.js";import"./Initials-_1ADzBrq.js";import"./InlineCode-Cz0k_lz5.js";import"./LayoutCard-DHZQzmf9.js";import"./Separator-DCsOFsY1.js";import"./MessageSeparator-VDKEbj1t.js";import"./NavigationGroup-C2WRYrg4.js";import"./Notification-Dm5qCZlZ.js";import"./NotificationProvider-C4XAijkx.js";import"./ControlledNotification-BmRpUxJg.js";import"./ProgressBar-CrfBQbOk.js";import"./Rating-FkhIC6fL.js";import"./Skeleton-pQXVpVZ0.js";import"./EmulatedBoldText-_shc_-go.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
