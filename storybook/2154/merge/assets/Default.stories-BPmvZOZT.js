import{j as r}from"./iframe-Ce1y9mDa.js";import{y as d,a0 as l,Z as g,C as u,a1 as x}from"./IconWarning-Cq_LhkIy.js";import{L as m}from"./Link-D-pziWbs.js";import{aa as s,ab as h,M as j,g as f,h as p}from"./Modal-B5SDnM4C.js";import{B as o}from"./Button-7HXgfRQm.js";import{T as c}from"./Text-gkToWDQ-.js";import{I as M}from"./Image-MnCK3KxN.js";import{d as I}from"./dummyText-CX_I_Wpl.js";import{A as T}from"./Avatar-CBVDeneG.js";import{e as b}from"./FileCardList-BlMAlev1.js";import"./Section-BnpA4R0K.js";import{H as k}from"./Heading-CTEdnBPn.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBC2SOgI.js";import"./index-Dg18p-Ek.js";import"./index-CQi4P5Ty.js";import"./useLocalizedStringFormatter-DJ1gfdUx.js";import"./context-Ds3IsYji.js";import"./utils-DDvzCibx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DXrCjRvx.js";import"./useFocusable-7LnlwHoJ.js";import"./dynamic-BLMgMZQd.js";import"./context-BS3tg5wC.js";import"./Button-CHIFuycL.js";import"./ProgressBar-CB9towVx.js";import"./Hidden-C6qb3gI3.js";import"./RSPContexts-Co0_PY2S.js";import"./Collection-Dzn6S5_i.js";import"./CollectionBuilder-DHKZo2jO.js";import"./SelectionIndicator-CEqK1ZkE.js";import"./Separator-DV4y1vPf.js";import"./browser-Cq8oxhIL.js";import"./useStatic-BHJIQiQW.js";import"./LoadingSpinner-B-DDCCI1.js";import"./Flex-W6EMBjqA.js";import"./Accordion-CLOM0Ma4.js";import"./ActionGroup-GiQVcnjT.js";import"./Alert-Cxybhncd.js";import"./AlertIcon-Dp0ZIISG.js";import"./AlertBadge-DOQyDmfm.js";import"./Align-BHiq55io.js";import"./AvatarStack-C1f-7D-W.js";import"./BigNumber-BuA-3GnB.js";import"./Breadcrumb-C2jdHzme.js";import"./Legend-D1sg630U.js";import"./Color-CF3eJFYM.js";import"./TableFooterRow-DSk7Viak.js";import"./SkeletonText-B6gTj_U8.js";import"./Content-DDAGDb2q.js";import"./Label-CYdyGifL.js";import"./CounterBadge-CvXy5Oz3.js";import"./DonutChart-DSfM5bil.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DNO1mdVn.js";import"./Header-B5pcUp1F.js";import"./Initials-DltL2xg8.js";import"./InlineCode-HVHT7k08.js";import"./LayoutCard-DG1Z6Pl5.js";import"./Separator-DXJX0Nok.js";import"./MessageSeparator-Byy5sV6o.js";import"./NavigationGroup-Cvtmebaj.js";import"./Notification-BfU9Xz2u.js";import"./NotificationProvider-CPeFG8LD.js";import"./ControlledNotification-DXpIZWHx.js";import"./ProgressBar-BH1las8m.js";import"./Rating-CFZ218Cx.js";import"./Skeleton-BBPWZ02g.js";import"./EmulatedBoldText-Dp9LuwQf.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(h,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(j,{children:r.jsx(k,{children:"Notifications"})})]}),r.jsxs(b,{children:[r.jsx(o,{children:r.jsx(T,{children:r.jsx(M,{alt:"Gopher",src:I.imageSrc})})}),r.jsxs(f,{children:[r.jsxs(p,{children:[r.jsx(u,{}),r.jsx(c,{children:"Profile"})]}),r.jsxs(p,{children:[r.jsx(x,{}),r.jsx(c,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
