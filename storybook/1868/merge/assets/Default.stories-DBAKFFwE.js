import{j as r}from"./iframe-CSKx2DB9.js";import{u as H,$ as S,X as b,K as v,a0 as B}from"./IconWarning-BzSjyCQK.js";import{L as m}from"./Link--IOrbUCR.js";import{H as s}from"./HeaderNavigation-DqQDJ6T2.js";import{B as o}from"./Button-CGfBcGjf.js";import{T as p}from"./Text-Bmwkohav.js";import{I as C}from"./Image-D1hOz_gm.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DQyIFNT8.js";import{a as y,C as A,M as c}from"./ContextMenuContent-CYo8Q8kj.js";import"./ContextMenuSection-BsTnXb8D.js";import{a as D,M as G}from"./Modal-BGvAU2RT.js";import{H as E}from"./Heading-DOJjlFqr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C0bkGgAw.js";import"./mergeRefs-B1bHS3Lu.js";import"./index-CZyLPT9E.js";import"./useLocalizedStringFormatter-CVB2HXqz.js";import"./context-Bn01uWj8.js";import"./utils-YOZNNe11.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-ecHooUdc.js";import"./useFocus-I-Zr9gNg.js";import"./useFocusRing-BU-rqxqA.js";import"./useFocusable-Bvlvgb30.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BollpMOD.js";import"./Button-B9MrnXzC.js";import"./ProgressBar-YhbO88q7.js";import"./Label-DAbN940v.js";import"./Hidden-DMi08SHV.js";import"./useLabel-_rV78s5e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./browser-Dat2Zw9G.js";import"./EmulatedBoldText-BvpVJXGr.js";import"./Text-B7qxA7QU.js";import"./AlertIcon-BXytEQvv.js";import"./Action-ClIpfTCh.js";import"./context-DR_D1zB2.js";import"./useStatic-Bj6FvUH8.js";import"./getActionGroupSlot-v4y_SS20.js";import"./Popover-DLfT28i_.js";import"./DialogTriggerView-B5qjcGt-.js";import"./Dialog-DyxFQfdj.js";import"./RSPContexts-wGW2yDhA.js";import"./OverlayArrow-Do1uAdCK.js";import"./useControlledState-C62hAHev.js";import"./Collection-xryT71jZ.js";import"./CollectionBuilder-DUDLoyvE.js";import"./Separator-9BmxbDD1.js";import"./Group-CcV8UsXg.js";import"./SearchField-CCkKmI81.js";import"./FieldError-BRs7GrZl.js";import"./Form-BMsmelnL.js";import"./useTextField-Z7fbw5-A.js";import"./useFormReset-BnPXW2IT.js";import"./TextField-BnFF1ZSM.js";import"./useEvent-BD3Jcka0.js";import"./SelectionManager-C0eeXnR3.js";import"./useCollator-D-NDo9Pp.js";import"./FocusScope-CQRCLCh1.js";import"./VisuallyHidden-BzxCqTVo.js";import"./Switch-CksVne7g.js";import"./Label-uvRQ_UBY.js";import"./useToggleState-CLl_To82.js";import"./Overlay-DtC8HMEu.js";import"./Header-BdoYNCwD.js";import"./ButtonView-BpcEzJyy.js";import"./Heading-CZ9N6yHw.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(G,{children:r.jsx(E,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
